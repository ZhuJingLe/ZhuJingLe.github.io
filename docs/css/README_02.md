# 【CSS】面试题

## 1. CSS 主要新增了哪些新特性和功能？

1. 边框和背景
+ border-radius 允许元素创建圆角边框
+ border-image 为边框设置图像
+ multiple backgrounds 允许一个元素使用多个背景图像
+ background-size 允许指定背景图片尺寸
+ gradient backgrounds 允许创建背景渐变效果

2. 盒子模型
+ box-sizing 提供了元素盒子模型大小的计算方式 取值范围 content-box、border-box
+ overflow 控制内容溢出元素框的行为

3. 文字排版
+ text-shadow 为文字元素添加阴影效果
+ text-overflow 控制文本溢出容器的显示方式
+ word-wrap 控制文本如何换行

4. 媒体查询 允许根据设备的特性（屏幕尺寸、分辨率等）应用不同的样式，实现响应式布局和设计。

5. 超级选择器 包括属性选择器 伪类选择器

6. 动画（animation）、过渡（transition）、变换（transform）

7. 阴影和渐变
+ box-shadow 为元素添加阴影效果
+ linear-gradient radial-gradient 创建线性渐变和径向渐变


## 2. 如何优化图片
+ 对于装饰类的图片，尽可能是使用 css 替代。
+ 小图片使用 base64 格式图片。
+ 将多个图片整合到一张图片上（雪碧图）
+ 对于支持 webP 格式的浏览器尽可能使用 WebP 格式，因为他拥有更好的图像数据压缩算法，在保证图像质量的情况下拥有更小的图像体积。缺点就是兼容性不好。


## 3. 什么是重排和重绘？
::: tip
重排：部分渲染树（或整个渲染树）需要重新分析重新计算节点的尺寸，生成新的布局，根据每个元素的位置以及尺寸重新排列元素。
:::

::: tip
重绘：元素节点的样式发生变化，例如改变元素的背景色，屏幕上的部分内容需要重新更新。
:::

1. 注意点：
+ 重排比重绘的代价更高，重排对性能的影响更大。所以尽可能的减少重排。
+ 重绘不一定会出现重排，但重排一定会出现重绘。

2. 引起重排的原因（一般由 DOM 元素的几何属性发生变化引起的）
+ 添加或删除可见的 DOM 元素
+ 改变元素的位置
+ 改变元素的尺寸
+ 元素内容改变
+ 浏览器窗口尺寸发生变化

3. 引起重绘的原因 （元素的外观发生改变）
+ 改变元素的颜色
+ 改变字体的颜色
+ 引起了重排

4. 如何尽可能的避免重绘和重排
+ 样式集中改变
+ DOM 操作集中完成

## 4. 介绍下粘性布局（sticky）
> sticky 布局是众多布局中的一种，将元素 position 属性设置为 sticky 即可实现粘性布局。该元素存在两种布局场景，第一种为最近祖先存在滚动元素，另一种情况祖先没有滚动元素。

1. 相对最近滚动祖先（overflow属性设置为auto scroll）进行粘性布局时，当祖先元素滚动的距离超过 sticky 元素设置的偏移值（left，right，top，bottom）时，sticky 元素会固定在滚动元素窗口的某个位置，不会随着窗口的滚动而滚动。
来看个例子。

```html
<style>
    .box {
        width: 200px;
        height: 100px;
        border: 1px solid red;
        overflow-y: scroll;
    }
    .inner {
        position: sticky;
        top: 0;
        right: 0;
        background-color: orange;
    }
</style>
<div class="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div class="inner">4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
</div>
```
因为 inner 设置了 sticky 所以当 box 滚动的距离超过 inner 设置的位置的时候，inner 会固定在 （top: 0;left:0） 的位置不会随着窗口的滚动而滚动。

![16](/css/01/16.gif)

2. 当没有滚动祖先时，sticky 则相对于最近块元素进行布局。

## 5. CSS3 中 transition 和 animation 的属性分别有哪些?
### transition （css 过渡）
+ transition-property：规定应用过渡的 CSS 属性的名称。如果你想为多个属性添加过渡效果，你可以使用逗号分隔这些属性。例如：transition-property: width, height;。
+ transition-duration：定义过渡效果花费的时间。默认是 0。例如：transition-duration: 2s;。
+ transition-timing-function：规定过渡效果的时间曲线。默认是 "ease"。可能的值有 "linear"，"ease"，"ease-in"，"ease-out"，"ease-in-out"，"cubic-bezier(n,n,n,n)" 等。例如：transition-timing-function: ease-in-out;。
+ transition-delay：定义过渡效果何时开始， 延迟过渡开始的时间。默认是 0。例如：transition-delay: 1s;。

### animation （css 动画）
+ animation-name：定义需要绑定到选择器的关键帧名称。这是动画的基础，它指定了动画应该使用哪个@keyframes规则。
+ animation-duration：定义完成动画所花费的时间长度。这决定了动画一个周期所需的时间，单位是秒(s)或毫秒(ms)。
+ animation-timing-function：定义动画的速度曲线。它描述了动画在其持续时间内的进度。常见的值有linear（动画从头到尾的速度相同）、ease（默认，动画以低速开始，然后加速，最后在结束前变慢）、ease-in（动画以低速开始）、ease-out（动画以低速结束）以及ease-in-out（动画以低速开始和结束）等。
+ animation-delay：定义动画在启动前的延迟间隔。这意味着动画会在这个指定的延迟之后开始。
+ animation-iteration-count：定义动画播放次数。你可以设置具体的数字，或者使用infinite表示无限循环
+ animation-direction：定义是否应该轮流反向播放动画。可能的值有normal（正常播放）、reverse（反向播放）、alternate（动画轮流反向播放）以及alternate-reverse（动画先反向播放，然后轮流反向播放）等
+ animation-fill-mode：规定动画播放之前或之后，元素将如何保持其样式。
+ animation-play-state：允许你暂停和恢复动画。

