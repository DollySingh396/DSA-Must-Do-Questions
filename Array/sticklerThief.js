function findMaxSum(arr, n)
{
    // code here

    // we are maintianing an and array to store the maximum amount at every house i, till i 
    var ans = []
    /**
     *  If there is only one house then max amount will be that one house value
     */
    ans[0] = arr[0];
    /**
     *  if we have two houses then max amount will be maximum of those two houses
     */
    ans[1] = Math.max(arr[0], arr[1]); 
    
    // till now in ans array we have stored the maximum amount at house i = 0 
    // and at house i = 1
    if (n === 1) return ans[0];

    if (n === 2) return Math.max(arr[0], arr[1]);

    // if there are more houses
    /**
     *  then traverse the whole array of houses
     *  ans at any house i, we include current element and watever max amount we get till i-2 house
     *  and exclude i - 1 house
     *  
     *  or we include value of i-1 house and exclude current i house
     * 
     *  we are storing max value at every house i in ans array
     */
    for (let i = 2; i < n; i++){
        ans[i] = Math.max(arr[i] + ans[i-2], ans[i-1]);
    }
    // at the n-1 house we will have max amount we collected till now
    return ans[n - 1];
}
/**
 *  Given an array find the maximum amount that a thief can get on looting the houses but not adjacent houses
 * 
 *  if a house is looted then its neighbours can't be looted
 *  if a house is not looted then its neighbours may be looted or may not be looted
 * 
 *  TC - O(N) , SC - O(N)
 */
var a = [5, 10, 100, 100, 10, 5];
var n = a.length;
console.log(findMaxSum(a, n))