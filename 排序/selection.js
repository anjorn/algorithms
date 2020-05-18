// 选择排序
// 特点： 运行时间和输入无关 数据移动是最少的
// 思路：找到数组中最小的元素 
// 时间复杂度 O(N^2)
// 空间复杂度 O(N)
function selection (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j ++ ) {
            if (arr[j] < arr[i]) {
                // 交换位置
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(selection([3,4,1,2,5]))