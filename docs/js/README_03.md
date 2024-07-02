# 【js】面试题

## 1.call、apply、bind 的异同点是什么？
共同点：
三者都是函数的一个方法用于更改函数内部的 this 指向。

不同点：
| 方法 |  参数  | 返回值 |
| --- |  ---  | --- |
| call | 除第一个参数外可接受 0 ~ n 个参数 | 无 |
| apply | 除第一个参数外最多只能接受一个参数，这个参数还必须是数组 | 无 |
| bind | 除第一个参数外可接受 0 ~ n 个参数 | 返回一个 this 指向第一个参数的函数 fn |

它们的第一个参数都是同一个作用，即表示函数 fn 内部 this 的值。

## 2.手写实现 call、apply、bind 方法。
call
```js
Function.prototype.myCall = function(context, ...args) {
    context = context || globalThis
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const res = context[fnSymbol](...args)
    delete context[fnSymbol]
    return res;
}
```
apply
```js
Function.prototype.myApply = function(context, args) {
    context = context || globalThis
    let fnSymbol = Symbol()
    context[fnSymbol] = this;
    const res = args ? context[fnSymbol](...args) : context[fnSymbol]()
    delete context[fnSymbol]
    return res
}
```
bind
```js
Function.prototype.myBind = function(context, ...args) {
    let fn = this
    return function(...newArgs) {
        const allArgs = [...newArgs, ...args]
        return fn.apply(this instanceof fn ? this : context, allArgs)
    }
}
```




