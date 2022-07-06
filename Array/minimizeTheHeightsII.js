function getMinDiff(arr, N, K) {
    // your code here

    // sort the array first
    arr.sort((a, b) => a - b);
   
    // initial maximum difference is difference of first and last values
    var diff = arr[n - 1] - arr[0];
    // initial minimum value is first array value
    var min = arr[0];
    // initial maximum value is last array value
    var max = arr[n-1];

    // traverse the array from 1 to n - 1
    for (let i = 1; i < N; i++){
        // minimum height is min of first smallest tower plus k or its next tower height minus k
        // to get the minimum height after adding k to whole array
        min = Math.min(arr[0] + k, arr[i] - k);
        // to get the maximum height after deleting k from whole array
        max = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        // get min value of current diff value and max - min value

        console.log(`min value is ${min} and max value is ${max}`);
        diff = Math.min(diff, max - min);
    }

    return diff;
}
// TC - O(NlogN)
// SC - O(N)
var arr = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];
var k = 5;
var n = arr.length;
console.log(getMinDiff(arr, n, k));
