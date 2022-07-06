function sumClosest(arr, x) {
   
    // initialising the variables
    var i = 0;
    var j = arr.length - 1;
    var sum = 0;
    var diff = Number.MAX_SAFE_INTEGER;
    var closestPair = [];
    
    // using two pointers i and j 
    while (i < j) {

        // finding current i and j values sum
        sum = arr[i] + arr[j];

        // if the difference of current sum and x value is less than the previous difference of sum and x value
        // then update the closest pair with current i and j values
        // and update the difference value with minimum difference value
        if (Math.abs(x - sum) < diff) {
            closestPair = [arr[i], arr[j]];
            diff = Math.abs(x - sum);
        }

        // else 
        // if sum is less than x increment i
        // if sum is greater than x decrement j
        if (sum < x) i++;
        else j--;
    }
    //return the pair of i and j
    return closestPair;
}
/**
 *  Find a pair whose sum is closest to X
 *  Tc - O(N), SC - O(1)
 */
var X = 54;
var arr = [10, 22, 26, 27, 30, 40];
console.log(sumClosest(arr, X));
