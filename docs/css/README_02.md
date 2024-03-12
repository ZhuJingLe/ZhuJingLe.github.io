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

## 5. CSS3 中 transition 和 animation 的属性分别有哪些?

