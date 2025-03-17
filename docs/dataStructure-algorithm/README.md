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
  return arr;
}
```

## 2. 冒泡排序
```js
// 连续比较相邻的两个元素，每一轮找出一个最大（小）值，这个过程就像气泡从底部升到顶部一样，因此得名冒泡排序。
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}
```

## 3. 插入排序
```js
// 在未排序的区域选择一个元素，与已经排序的元素进行比较找到合适的位置插入，并且插入位置后面的元素都要后移一位。
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while(j >=0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
```
## 归并排序
```js
// 使用递归将数组分成两个子数组进行合并排序
function mergeSort(arr) {
  if(arr.length > 1) {
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right)
  } 
  return arr;
}
function merge(left, right) {
  let i = 0;
  let j = 0;
  let result = [];
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i])
      i++;
    } else {
      result.push(right[j])
      j++;
    }
  }
  return result.concat(i < left.length? left.slice(i): right.slice(j))
}
// test
let arr = [990, 56, 34, 56, 76, 234, 432, 99]
console.log(mergeSort(arr));
```