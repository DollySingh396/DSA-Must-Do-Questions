/**
 *  Problem: To find the largest SubArray with maximum Sum
 *  Approach Used is Kadane's Algorith
 *  Time Complexity : O(N), N - size of given array
 *  Space Complexity : O(1)
 *  Two Aproaches are used :
 *  First - Greedy - won't be able to handle the case when all array elements are negative
 *          Atleast one array element has to be positive
 *  Second - DP - will handle all cases
 *                 Also, if array has all negative values
 * 
 *  Also, we are storing index of start and end of Largest SubArray with Maximum Sum
 *  
 */

/**
 * 
 * Greedy Approach
 */
function subArray(arr, n){
    var sum_till_now = 0;
    var max_sum = Number.MIN_VALUE;
    var start = 0;
    var end = 0;
    var s = 0;
    // iterating over full array
    for( let i = 0; i < n; i++){
        //adding current array element to get total sum from start till now
         sum_till_now += arr[i];

        // the max sum is less than the total sum till now then store in max
         if(max_sum < sum_till_now){
             max_sum = sum_till_now;
             // since it is maximum sum till now 
             // so end will be the current index and
             // start will be the previous start value which was set
             start = s;
             end = i;
         }
         // if sum till now is negative then we will make it again zero
         if( sum_till_now < 0){
             sum_till_now = 0;
             // if summ till now is negative then 
             //the positive sum will start from next index so i+1
             s = i+1;
         }
        }
        return [max_sum, start, end];
}

/**
 *  used two inputs -
 *  Input 1: arr = [ -2, -3, -4, -11, -12, -16, -5, -13];
 *              for this Greedy approach won't work, DP will.
 *  Input 2: arr = [ -2, -3, 4, -1, -2, 1, 5, -3];
 *              this will work for both Approaches
 */
arr = [ -2, -3, 4, -1, -2, 1, 5, -3]; // to check negative
var n = arr.length;
console.log(`Using Greedy : Maximun Sum of SubArray is : ${subArray(arr, n)}.\t
Start Index of SubArray is: ${subArray(arr, n)[1]}.\t
End Index of SubArray is: ${subArray(arr, n)[2]}`);


/**
 *  DP Approach
 */

function maxSubArray( arr, n){

    var prev = 0;
    var max = -Number.MAX_VALUE;
    var st = 0;
    var ed = 0;
    var s = 0;

    for( let i = 0; i < n; i++){
        // finding max from current array value and all prev sum plus current array value
        prev = Math.max( arr[i], prev + arr[i] );
        // finding the maximum is max or prev
        max = Math.max( prev, max)

        // if prev sum is less than prev sum plus current element
        // then start will be old value
        // but end will be current index
        if( prev < prev + arr[i]){
            st = s;
            ed = i;
            console.log(ed);
        }

        // if prev sum is negative after adding current element also,
        // then start will be next index only
        if( prev < 0){
            s = i+1;
            
        }
    }

    return [max, st, ed];
}

console.log()
console.log(`Using DP : Maximun Sum of SubArray is : ${maxSubArray(arr, n)}.\t
Start Index of SubArray is: ${maxSubArray(arr, n)[1]}.\t
End Index of SubArray is: ${maxSubArray(arr, n)[2]} `);

