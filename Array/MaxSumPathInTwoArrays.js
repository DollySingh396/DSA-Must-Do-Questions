function max_path_sum(a, b, M, N){
    //your code here
    // sum1 holds the sum of values of array a
    // sum2 holds the sum of values of array b
    // i and j are pointers pointing on a and b array respectively
    // maxSum will store the max sum of path
    var sum1 = 0;
    var sum2 = 0;
    var i = 0;
    var j = 0;
    var maxSum = 0;

    // traversing the two arrays
    while (i < m && j < n) {
        
        // if the value of array b is less then add to sum2 and move i pointer
        // else add to sum1 and move j pointer
        if (a[i] > b[j]) {
            sum2 += b[j];
            j++;
        } 
        else if (a[i] < b[j]) {
            sum1 += a[i];
            i++;
        }
        // if both values are same then we can switch to another array to explore the max sum path
        // so to do that we will max sum path til now and make sum1 and sum2 zero 
        // to track the sum of same values and after the same values
        else {
            // whatever vcalue is max till common value we will get that bcz we want max sum path
            maxSum += Math.max(sum1, sum2);
            sum1 = 0;
            sum2 = 0;
            // untill all the same values are covered keep on adding the same values to the max sum
            // and move the pointers frwrd
            while ( (a[i] === b[j]) && (i < m && j < n) ) {
                maxSum += a[i];
                i++;
                j++;
            }

        }
    }

    // when one array is traversed completely and one array is left
    // then if array a is left add a's values to sum1 
    while (i < m) {
        sum1 += a[i];
        i++
    }

    // if b values are left then add b's values to sum2
    while (j < n) {
        sum2 += b[j];
        j++
    }

    // whichever is max add that in max sum
    maxSum += Math.max(sum1, sum2);
    
// this is how we are exploring all paths
    return maxSum
}
/**
 *  find the maximum sum path of the two arrays
 *  TC - O(N + M) -- bcz traversing both the arrays
 *  SC - O(1)
 */

var a = [1, 2, 3]
var b = [3, 4, 5]
var m = a.length;
var n = b.length;
console.log(max_path_sum(a, b, m, n));