# 【CSS】面试题 
## 1. px 和 em 的区别？
> px 全称为 **pixel**，px 的物理长度是相对于屏幕的分辨率而言的，在同一个设备屏幕上每个像素表示的物理长度是一样且固定不变的。换言之不同的设备之间一个像素表示的物理长度是可能不一样的。

> em 是一个相对长度单位，em 的长度取决于它的父级元素。计算规则如下案例。

案例1：如果设置父元素字体设置为 font-size: 40px; 子元素设置为 font-size: 1em;
```html
<!-- css -->
<style>
    .parent {
        font-size: 40px;
    }
    .child {
        font-size: 0.5em;
        padding: 1em;
    }
</style>
<!-- html -->
<div class="parent">
    父元素
    <div class="child">
        子元素
    </div>
</div>
```
效果为：
父元素字体大小为 40px，子元素大小为 20px，你可能给会得出结论 1em 的大小取决于父元素字体的大小（就 font-size 这个属性而言这个结论是没有问题的）。

![1](/css/01/1.png)
![2](/css/01/02.png)

当我们设置上面子元素的 pading 和 margin 值为 1em 时，你会发现上面的结论并不适用于这两个属性，子元素除 font-szie 属性 em 值大小取决于父元素字体大小之外，其他属性的 em 值大小取决于自身字体大小。如：子元素的字体大小为 20px 那么自身其他属性的 1em 大小为 20px。

![3](/css/01/3.png)


## 2. vh 和 vw 是什么?
> vh vw 分别为 **view height** **view width**，即浏览器页面的可视高度和宽度。将可视高度/宽度分为一百等份，100vh/vw 表示为浏览器页面整个可视高度/宽度。1vh/vw 则表示为可视高度/宽度的百分之一。

案例：
```html
<!-- css -->
<style>
    div {
        height: 50vh;
        width: 50vw;
        background-color: pink;
    }
</style>
<!-- html -->
<div class="box">
    box
</div>
```
当改变可视区域大小时，元素大小也随之改变。

![4](/css/01/4.gif)


<!-- ## 3.BFC 是什么？及其应用有哪些？
> BFC 全称为 block formatting context, -->
