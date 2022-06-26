function maxSum(arr, n) {

    arr.sort((a, b) => a - b);

    var sumOfDiff = 0;
    // Approach 1
    for (let i = 0; i < n; i++){
        sumOfDiff += Math.abs(arr[i] - arr[n - i - 1]);;       
    }

    // Approach 2
    // var i = 0; var j = n - 1;
    // while (i < j) {
    //     sumOfDiff += Math.abs(arr[i] - arr[j]);
    //     sumOfDiff += Math.abs(arr[i+1] - arr[j]);
    //     i++;
    //     j--;
    // }

    // sumOfDiff += Math.abs(arr[i] - arr[0]);
    return sumOfDiff
}

/**
 *  Maximize the sum of difference
 *  
 *  in order to maximise the sum of difference rearranfge the array 
 * 
 *  4, 2, 5, 1, 8 => 1 2 4 5 8 => 1 8 2 5 4 
 * 
 *  how we are rearranging
 *  after sorting the array we are picking the min and max values and finding the difference
 *  
 *  there are two ways to do this
 *  either take elements from first and last and find diff and add to add
 *  Or take the jth element find its differnce with i and i + 1 and so on
 *  
 */

// TC - O(NlogN), SC - O(1)
var arr = [4, 2, 5, 1, 8];
var n = arr.length;
console.log(maxSum(arr, n));