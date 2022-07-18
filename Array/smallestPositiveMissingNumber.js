function missingNumber(arr, n)
{
    /**
     *  traverse the array and check for zero based indexing
     *  the value at i th index should be i+1, if not then we will swap the value with its index value
     *  so that i th index has i + 1 value
     * 
     *  first we will check the value at ith index should be in the range from 1 to n+1 including 1 and n+1
     *  if yes then we will check the value at index i i.e arr[i], should be present at its arr[i]-1 th index
     *  if not we will swap
     *  
     *  keep swapping until the value at ith index is i+1
     * 
     *  at the end all values will be at there 0 based index
     */
    for (let i = 0; i < n; i++) {

        while (arr[i] >= 1 && arr[i] <= n && arr[i] != arr[arr[i] - 1])
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]]

    }

    /**
     *  traverse the array again 
     *  if the value at i th index is not equal to i + 1
     *  then return that value
     *  that is first missing positive value
     *  
     *  else if all values are at their correct index then return n + 1 value
     */
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) return i + 1;
    }
    return n + 1;
}
/**
 *  find the smallest missing positive number
 *  TC - O(N)
 *  SC - O(1)
 */

var arr = [0, 1]
var n = arr.length;
console.log(missingNumber(arr, n))