function peakElement(arr, n){
   
    /**
     *  Approach 1  - 
     *  trvaersing from the end and 
     *  if we found any value at index k such that that k value is not greater than k -1 value
     *  then you found a peak
     */
    var k = n-1
    while( arr[k] < arr[k - 1]) k--;
    return k;

    /**
     *  Approach 2 - Binary Search
     *  check if middle value is peak or not  - 
     *  see if  either the middle is 0 or if m is not 0 then see arr[m - 1] <= arr[m]
     *  &&  
     *  see  if  either the middle is n-1 or if m is not n-1 then arr[m] >= arr[m+1] or then return m 
     * 
     *  
     */

    var l = 0;
    var r = n - 1;
    var m;
    while( l <= r){
        
        m = Math.floor( (r + l) / 2 );
        
        // either m is 0 and value at m is > m+1
        // or m is n-1 and value at m is > m-1
        // or   m-1 < m > m + 1 
       if( ( m === 0 || arr[m - 1] <= arr[m] )  &&  (m === n - 1 || arr[m+1] <= arr[m]) )
        return m;
       else if( (arr[m - 1] > arr[m]) && (m > 0) ) r = m - 1;
       else  l = m + 1;;
   }
}

// TC - O(logN)
// SC - O(1)
var arr = [10, 20, 15, 2, 23, 90, 67];
var n = arr.length;
console.log(peakElement(arr, n))