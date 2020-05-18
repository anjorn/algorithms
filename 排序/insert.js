// 插入排序
// 特点： 取决于输入中元素的初始顺序 适用于部分有序的数组和小规模数组
// 思路： 比较一个 整个都往后移一位
// 后面的如果小于前面的 整体往后移动一位 当前值放在最前面
function insertion (arr) {
   for (let i = 1; i < arr.length; i++) {
       var key = arr[i];
       var j = i;
       while (j > 0 && arr[j - 1] > key) {
            arr[j] = arr[j - 1];
            j--;
       }
       arr[j] = key;
   }
   return arr;
}
console.log(insertion([3,4,1,2,5]))