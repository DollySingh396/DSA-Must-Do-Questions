function mergeOperations(arr){

    /**
     *  Initializing variable
     *  start  as 0,
     *  end as n-1
     *  and initial merge count is 0
     */
    var start = 0;
    var end = arr.length - 1;
    var mergeCount = 0;

    /**
     *  corner cases
     *  if array has only one element then start will be same as end
     *  so no of merge operations will be 0
     *  if array has no elements then we can't perform any operations 
     *  so, in that case return -1
     * 
     *  Main concept here is in worst case 
     *  for a string of length n, no of merge operations are n - 1
     *  
     *  so if n = 1 , no of merge operations are n - 1 = 1 - 1 = 0
     */
    if( start === end ) return 0;
    if( arr.length === 0 ) return -1;

    /**
     *  traversing the whole array - O(N)
     */
    while( start <= end){

        /**
         *  if at the start and end same values are present then simply
         *  increase the start pointer and decrease the end pointer
         */
        if( arr[start] === arr[end] ){
            start++;
            end--;
        }
        /**
         *  if at the start and end values are different
         *  then we need to merge the value
         *  to decide on which side to merge the values
         *  we will picl side which has minimum value
         *  
         *  if end value is less merge on end side
         *  and store the new value at end - 1
         *  and decrement end and increment mergeCount
         */
        else if( arr[start] > arr[end] ){
            arr[end - 1] = arr[end] + arr[end - 1];
            end--;
            mergeCount += 1;
        }
        /**
         *  merge on start side and increment start and mergeCount
         *  
         */
        else{
            arr[start+1] = arr[start] + arr[start + 1];
            start++;
            mergeCount += 1;
        }
    }
    return mergeCount;
}
/**
 *  Given an array, need to find the no of merge operations to be 
 *  performed on array, so that it becomes palindrome
 *  for eg given array is 1451, if we merge 4 and 5 it will form
 *  191 bcz 4+5 = 9
 *  on reading 191 from start or from end it will be 191 only
 */
/**
 *  TC - O(N)  - traversing the whole array
 *  SC - O(1)
 */
arr  = [1, 4, 5, 1],
console.log(mergeOperations(arr));  