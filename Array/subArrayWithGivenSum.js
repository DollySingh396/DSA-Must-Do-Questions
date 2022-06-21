function subarraySum(arr, n, s){
        
        /**
         *  initialize variable 
         */
        var start = 0;
        var currSum = 0;

        // traverse the whole array
        for( let i = 0; i < n; i++){

          // add the current element in sum  
           currSum += arr[i];
          // if current sum is greater than given sum then
          // reduce the sum by removing the elements from the start of array
          // and move the start to next element  
           while( currSum > s) currSum -= arr[start++];

           // if current sum is equal to given sum then return start and end indexes
           // we want indexing from 1 so return start + 1 and end + 1
           if( currSum === s) return[ start + 1, i+1]
        }
        // if we don't find any subarray with given sum then return an array of one element -1
        if( currSum !== sum) return [-1];
}
/**
 *  TC - O(N) + O(N) -> O(N)
 *  The Array is traversed only once to insert elements into the window. It will take O(N) time
 *  The Array is traversed again once to remove elements from the window. It will also take O(N) time.
 *  
 *  SC - O(1)
 */
var arr = [4,9,7,5,3];
var n = arr.length;
var sum = 12;
console.log(subarraySum(arr, n, sum))
