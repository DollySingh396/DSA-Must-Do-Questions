function firstElementKTime(arr,n,k){
    //code here

    // empty object
    var obj = {};

    // traversing the whole array
    for( let i = 0; i < n; i++){
        
        /**
         *  if the element alraedy exists in object then 
         *  increase the count of its value
         *  and chcek if the count is eual to k value
         *  then simply return that element
         */
        if( obj[arr[i] ] ) {
            obj[ arr[i] ] += 1;

            if( k === obj[ arr[i] ])
            return arr[i];
        }
        /**
         *  if element is read for the first time
         *  then initialize its value with 1
         *  if k is also 1 then simply return
         */
        else {
            obj[arr[i]] = 1;
            if( k === 1) return arr[i];
        }
    }
    
    console.log(obj)
    // if the element doesnot occur k times then simple return -1
    return -1;
}
/**
 *  TC - O(N);
 *  SC - O(N);
 */

var arr = [1, 7, 4, 7, 4, 8, 7];
var n = arr.length;
var k = 2;
console.log(firstElementKTime(arr, n, k))