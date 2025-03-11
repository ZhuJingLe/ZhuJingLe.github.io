# js 手写面试题

## 1. 防抖和节流
> 防抖和节流是常见的两种技术，他们的作用是为了减少高频触发事件的执行频率，提高页面性能及用户的交互体验。

### 防抖 debounce
> 防抖是指在事件触发 n 秒后，才会执行回调函数，但是如果在这 n 秒内又触发了事件，则会重新计时。

使用场景
+ 文本输入框的实时搜索，防止用户输入过快，导致请求过多
+ 监听浏览器页面窗口大小变化时，防止频繁的事件回调

实现方式
```javascript
function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  }
}
```

### 节流 throttle
> 节流是指在事件触发后，会在 n 秒内只执行一次回调函数。

使用场景
+ 鼠标或触摸屏的移动，防止页面抖动
+ 窗口滚动，防止频繁的DOM操作

实现方式
```javascript
function throttle(func, wait) {
  let timeout;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, arguments);
      }, wait);
    }
  }
}
```

[AA](/example/debounceThrottle.html)

