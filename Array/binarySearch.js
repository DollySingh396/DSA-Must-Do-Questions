/**
 *  Find the index where the given key is present
 */
function binarysearch(arr, n, key) {
    
    /**
     *  initialising the varaibles
     *  left = 0
     *  right is length of array - 1
     */
    var left = 0;
    var right = n - 1;
    
    /**
     *  we are using binary search
     *  so keep traversing the array till left is <= right
     */
    while( left <= right){

        /**
         *  calculate the middle value
         */
        var middle = Math.floor( (right + left) / 2);

        /**
         *  if the key is present at middle index then simply return middle
         */
        if( arr[middle] === key) {
            
            return middle;
        }
        /**
         *  if the current middle value is less than key value
         *  then go look on the right side of middle element
         *  for that left will be middle + 1
         */
        else if( arr[middle] < key ) left = middle + 1;
        /**
         *  if middle index value is greater than key 
         *  then we need to look on to the left side of middle element
         *  for that make right as middle - 1
         */
        else right = middle - 1;
    }

    // if element is not present in array then return -1
    return -1;
}
/**
 *  TC - O(logN)
 *  SC - O(1)
 */
arr = [1, 2, 3, 4, 5];
var n = arr.length; 
var k = 2;
console.log(binarysearch(arr, n, k));