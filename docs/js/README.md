# 【JS】第一篇

## 1. js有哪些类型？判断值类型有哪些方法？

js 可以大致分为以下八种类型
+ Number 表示数值类型，包括整数和浮点数
+ String 表示字符串类型，如 "hello js" 就是一个字符串
+ Boolean 用于表示逻辑值，有且仅有两个值，true 和 false
+ Null 表示一个空值，他只有一个值 null
+ Undefined 当变量被声明了，但是没被赋值，那么它的值就为 undefined
+ Object 表示复杂的数据结构，如数组、函数、日期等。
+ Symbol（ES6新增）表示一个唯一的，不可变的原始值，通常用作对象的属性键
+ Bigint（ES10新增）可以表示任意大的整数，这允许 js 安全地存储和操作大整数，甚至超过 Number.MAX_SAFE_INTEGER

判断 js 值类型的方法

1. typeof 操作符。 它判断不了 null 和数组

```js
console.log(typeof 100);           // "number"  
console.log(typeof "Hello js");      // "string"  
console.log(typeof true);         // "boolean"  
console.log(typeof undefined);    // "undefined"  
console.log(typeof null);         // "object" 
console.log(typeof []);           // "object"
console.log(typeof {});           // "object"  
console.log(typeof function () { }); // "function"  
console.log(typeof Symbol('js'));  // "symbol"  
console.log(typeof BigInt(123));  // "bigint"
```

2. instanceof 操作符，用于检测构造函数的 prototype 属性是否出现在对象的原型链中的任何位置，达到判断一个对象是某个构造函数的实例。

```js
console.log([] instanceof Array) // true
```

3. Array.isArray() 方法，它是一个静态方法，判断一个对象是否为数组

```js
console.log(Array.isArray([])) // true
```

4. Object.prototype.toString.call() 方法，这个方法返回一个表示该对象的字符串，通过调用 Object.prototype.toString 并传入需要检测的类型变量，可以获取更准确的类型信息。

```js
console.log(Object.prototype.toString.call(1)) // [object Number]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call('js')) // [object String]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(function(){})) // [object Function]
console.log(Object.prototype.toString.call(Symbol('s'))) // [object Symbol]
console.log(Object.prototype.toString.call(BigInt(999))) // [object BigInt]
```
