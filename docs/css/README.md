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


## 3.BFC 是什么？及其应用有哪些？

> BFC 全称为 block formatting context, 译为 **块格式化上下文** ，它是 web 页面可视 css 渲染的一部分， 是块级盒子的布局过程发生的区域，这个区域有它自己的渲染规则，它决定了区域内部元素如何布局，以及与区域外的其他元素的关系和相互作用。

### 创建 BFC 的主要方法

+ 浮动元素 （float 值不为 none 的元素）
+ 定位元素（position 值为 absolute 或 fixed）
+ 行内块元素（display 值为 inline-block）
+ overflow 值不为 visible 或 clip 的块级元素

### BFC 的作用

> 主要有三点： 1. 解决子元素浮动（float）导致父元素区域坍塌的问题. 2. 解决浮动元素引起元素重叠的问题。 3.防止外边距重叠。

1. 解决子元素浮动（float）导致父元素区域坍塌的问题.

> 类为 box 的元素包含一个类为 float 的浮动元素，由于浮动元素脱离了正常文档流，又由于浮动元素比周围的元素都要高，所以浮动元素会溢出父元素 box。

```html
<!-- css -->
<style>
    .box {
        width: 400px;
        background-color: pink;
    }
    .float {
        float: left;
        border: 1px solid #000;
        width: 100px;
        height: 100px;
    }
</style>
<!-- html -->
<div class="box">
    <div class="float">float 元素</div>
    <div class="normal">正常元素</div>
</div>
```

![5](/css/01/5.png)

解决方法：将父元素 box 设置为 BFC 区域，那么它的浮动子元素也将参与 BCF 区域高度的计算，这样就不会出现浮动元素溢出的情况。
尝试为 box 添加一个 overflow: hidden; 属性。

```html
<style>
    .box {
        ...
        overflow: hidden;
        /* 或设置为 display: flow-root */
    }
</style>
```

![6](/css/01/6.png)

2. 解决浮动元素引起元素重叠的问题

> 由于 box 为浮动元素脱离了正常的文档流，所有 box2 会与 box 发生重叠

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: pink;
        float: left;
    }
    .box2 {
        width: 400px;
        height: 100px;
        background-color: chocolate;
    }
</style>
<div class="box">
    box
</div>
<div class="box2">
    box2
</div>
```

![7](/css/01/07.png)

解决方法：将 box2 设置为 BFC ，因为正常文档流中创建的 BFC 不得与元素本身所在的块格式上下文中的任何浮动元素的外边距重叠。

```html
<style>
    .box2 {
        ...
        overflow: hidden;
    }
</style>
```
![8](/css/01/8.png)

3. 防止外边距重叠

> box 和 box2 的外边距（margin）都为 10px，两者相距 10px 不是我们期望的 20px。

```html
<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
    }
    .box2 {
        width: 100px;
        height: 100px;
        background-color: chocolate;
        margin: 10px;
    }
</style>
<div class="box">
    box
</div>
<div class="box2">
    box2
</div>
```
![9](/css/01/9.png)

解决方法： 将 box 或 box2 包裹在一个 BFC 块中, 防止外边距重叠。

```html
<div style="overflow: hidden;">
    <div class="box2">
        box2
    </div>
</div>
```
![10](/css/01/10.png)

总结： BFC 是一个独立的布局区域，BFC 内部的元素布局与外部互不影响。

## 4. 什么是 CSS 盒模型？

> 在 html 中每一个元素（div span 标签等）都可以看作是一个盒子，盒子由外边距（margin）、内边距（padding）、边框（border）、元素内容（content）组成，盒子所占的宽度等于（padding + border + content）。当给元素设置一个宽度（width）时，此时设置的宽度不一定就是盒子所占有的宽度，它取决于元素此时的盒模型。

### 盒模型类型

#### 1.标准盒模型（w3c盒模型），一般默认为标准盒模型

> 使用 box-sizing: content; 设置元素为标准盒模型，该模型下元素设置的 width 其实是内容（width = content）的大小(如下图)，也就是说该模型下盒子所占的宽度还取决于外边距（margin）、内边距（padding）、边框（border）。

![11](/css/01/11.png)


#### 2.怪异盒模型（IE盒模型）

> 使用 box-sizing: border-box; 设置元素为怪异盒模型，该模型下元素设置的 width 是盒子的大小（width = padding + border + content），也就是说该模型下盒子所占的宽度由设置的 width 决定。

![12](/css/01/12.png)




