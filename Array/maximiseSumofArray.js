function Maximize(arr, n){
    //code here

    // sort the array
    arr.sort((a, b) => a - b);
    var res = 0;
    // traverse the array and store the sum
    // idea is at min index if min value is orseent and at max index max valueis present then only sum acan be maximised
    for (let i = 0; i < n; i++) {
        res += arr[i] * i;
    }

    return (res % (10 ** 9 + 7))
}
// TC - O(NlogN)
// maximise Sum of ( arr[i] * i ) of an array
var arr = [5, 3, 2, 4, 1];
var n = arr.length;
console.log(Maximize(arr, n));