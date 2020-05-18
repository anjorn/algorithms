// 希尔排序 缩小增量排序
// 思想： 使数组中任意间隔为h的元素都是有序的 h有序数组
// 增量比较 在插入排序的基础上 扩大了范围
// 动态的定义间隔序列
// while(gap < len/5) { //动态定义间隔序列 
// gap =gap*5+1; 
// }
// O(n*log2 n)
function shell (arr) {
    let len = arr.length;
    let gap = Math.floor(len / 2);
    while (gap != 0) {
        for (let i = gap; i < len; i++) {
            let key = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > key) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = key;
            gap = Math.floor(gap / 2);
        }
    }
    return arr;
}
console.log(shell([3,4,1,2,5]))