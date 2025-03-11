## 1. 选择排序
```js
// 选择排序每次从未排序的数组中选择最小的元素，放到已排序的数组的末尾
// 时间复杂度：O(n^2)
function selectionSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < n; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
```