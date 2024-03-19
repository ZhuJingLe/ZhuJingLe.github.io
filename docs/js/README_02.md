# [js]一文详解原型

## 一、前言
> 相信大家对 js 原型（Prototype）并不陌生，无论是在面试的时候，还是日常的开发中都能碰到它。比如：在使用 Vue2 开发的时候你可能会为 Vue 添加一个全局接口请求的方法 **Vue.prototype.$http = requestFun**, 这样的话在每个 Vue 实例中都可以通过 **this.$http** 很方便快捷的访问这个方法，这里就是运用了 js 的原型。如果你对 js 原型的概念还比较模糊的话，那么接下来我将逐步详细为你介绍 js 原型到底是什么。

## 二、从对象认识原型
字面量声明一个对象并打印这个对象

```js
let obj = {
    a: 1
}
console.log(obj);
```
你会发现除了属性 **a** 外还有一个 **[[Prototype]]** 属性，这个 obj.[[Prototype]] 就标识为 obj 的原型。

![01](/js/02/01.png)

然而你不能直接通过 obj["[[Prototype]]"] 访问这个原型。

```js
console.log(obj['[[Prototype]]']) // undefined
```

js 为对象提供了一个 **__proto__** 属性访问自身的原型

```js
console.log(obj);
console.log(obj.__proto__)
```

![02](/js/02/02.png)

还提供了另一种方法 **Object.getPrototypeOf** 获取

```js
console.log(obj);
console.log(Object.getPrototypeOf(obj));
```

![02](/js/02/02.png)

至此我们从对象认识到了什么是原型，以及如何获取一个对象的原型。

## 三、从构造函数认识原型
构造函数是通过 **new** 调用的方法。如下 **SuperConstructor** 就是一个构造函数。通过 new 一个构造函数创建一个构造函数实例对象 objInstance。

```js
function SuperConstructor() {}
let objInstance = new SuperConstructor();
```

我们都知道函数在 js 里面是引用类型也是一个对象，那么它是不是也有原型呢。我们打印 SuperConstructor 和 objInstance 来看下。

```js
console.dir(SuperConstructor)
console.dir(objInstance);
```

不出所料他两都有原型

![03](/js/02/03.png)

眼尖的你不知道有没有发现 SuperConstructor 有个属性 **prototype**，你会发现由 SuperConstructor 构造函数创建出来的实例对象的原型与该构造函数的 prototype 的属性相等。

![04](/js/02/04.png)

```js
console.log(SuperConstructor.prototype ==  objInstance.__proto__); // true
```

所以可以得出结论：构造函数有一个 prototype 属性指向由构造函数创建的实例的原型。

还有一个需要注意的是，构造函数的 prototype 同样有个 constructor 属性指向构造函数

```js
function SuperConstructor() {}
console.log(SuperConstructor.prototype.constructor == SuperConstructor) // true
```

## 四、继承属性和方法
> 至此我们得知对象、原型、构造函数三者之间的关系。我们再来看看原型有什么作用。利用原型继承属性

如下案例：obj2 本来是没有属性 a、b 以及方法 print，但是通过改变 obj2 的原型 __proto__ 指向为 obj，由此 obj2 “继承”了 obj 的属性。obj2 访问 a、b、print 的过程为：首先会在 obj2 这个对象上找，很显然 obj2 没这几个值，下一步会在 obj2 的原型 [[prototype]] 上找，上面有讲到 [[prototype]] 即为 __proto__，所以在 obj 上找有么有这几个属性和方法，正好找到了，结束查找。如果没有找到会接着在 obj 的原型上找，如果 obj 的原型上没有会接着在 obj 原型的原型上找，直到访问到 null。至于什么时候到 null，后面再详细介绍。
```js
let obj = {
    a: 1,
    b: 2,
    print: function() {
        console.log('被调用了~')
    }
}

let obj2 = {
    c: 3, 
    d: 4,
    __proto__: obj
}

console.log(obj2.c) // 3
console.log(obj2.d) // 4
console.log(obj2.a) // 1
console.log(obj2.b) // 2
obj2.print() // 被调用了~
```

## 五、原型链
> 原型链其实是个抽象概念，可以想象成由多个原型（prototype）串起来来的链子。这个链子有头部和尾部，尾部就是上面提到的为 null 的时候。

我们来看个例子：我们通过 obj4 访问 a 属性的查找过程为 obj4 -> obj4 的原型（obj3）-> obj3 的原型（obj2）-> obj2 的原型（obj），以上这个查找过程就形成了一个 “链子”，当查找 f 属性的时候由于 obj 上没这个属性所以会接着在 obj 的原型 Object 上找，obj 的原型上也没找到，接着继续在 obj 原型（Object）的原型（null）上找，但是 obj 原型（Object）的原型为 null，所以 obj4.f 返回 undefined。

```js
let obj = {
    a: 1
}

let obj2 = {
    b: 2,
    __proto__: obj
}

let obj3 = {
    c: 3,
    __proto__: obj2
}

let obj4 = {
    d: 4,
    __proto__: obj3
}

console.log(obj4.a); // 1
console.log(obj4.f); // undefined

```

## 六、在构造函数上修改原型
> 在上面的案例中我们都是直接修改对象的 __proto__ 来改变原型，接下来我们通过构造函数修改。

通过修改构造函数的 prototype 属性，来修改构造函数实例的原型（[[prototype]]）
```js
 function Vue() {
    this.a = 1;
    this.b = 2;
}

Vue.prototype.$http = function() {
    console.log('http 请求~')
}

let instance = new Vue();

console.log(instance.a); // 1
console.log(instance.b); // 2
instance.$http() // http 请求~
```

## 七、总结
每个引用类型数据都有一个属性（__proto__）指向它的原型，构造函数有个 prototype 指向构造函数实例的原型，而且这个原型有个 constructor 属性指向实例的构造函数。
通过对象、构造函数、原型之间的关系，我们可以利用原型继承扩展对象的功能，扩展指定的属性和方法。
查找对象属性的过程我们直到了原型链的概念使我们对原型的概念更加清晰。



















