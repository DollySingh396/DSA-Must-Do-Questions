/** 
 * This approach will not work if array has duplicate values bcz 
 * then it will be difficult to decide in which half of array
 * the key will be present.
 */

// l is low and h is high
function search(A, l, h, key){

    /**
     *  Corner Cases
     *  1. if low > high return -1 bcz not valid scenario
     */
    if( l > h ) 
        return -1;

    /**
     *  Calculate the middle index of A
     */
    var m = Math.floor(( l + h) / 2);

    // if key is preesnt at middle index then return middle index
    if( key === A[m]) return m;

    /**
     *  If key is not present at middle index then there are two possible cases:
     *  1. Key is present in first half
     *  2. Key is present in second half
     * 
     */

    /**
     *  Checking if the first half is sorted 
     *  if Yes, then  there are 2 cases - 
     *  1. find the key is greater than low and less than mid -
     *      so recursive call search function with the first half where h = m - 1
     * 
     *  2. if key is less than low then it will be present in the rotated part of arrya.
     *      So recursive call serach function with teh second half where l = m + 1 
     */
    if( A[l] <= A[m]) {
        if( key >= A[l] && key <= A[m] ) 
        return search(A, l, m - 1, key);
        else 
        return search( A, m + 1, h, key);
    }


    /**
     *  if the first half is not sorted then second half of array will be sorted
     *  Two cases -
     *  1. if key is greater than mid and less than high 
     *      So call search function recursively with l = m + 1
     *  2. else recursive call search funtion with h = m - 1        
     * 
     */
    if( key >= A[m] && key <= A[h] ) 
    return search( A, m + 1, h, key);
    else
    return search( A, l, m - 1, key )

}
   
// given sorted array which is rotated
    var A = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
    var n = A.length;
// find the index of key in A
    var key = 7;
// Print the index at which key is present   
// low = 0 and high = n-1 
    console.log(search(A, 0, n-1, key));

/**
 *  TC = O(logn) - binary search
 *  SC = O(1) - some call stack space is used for recursion calling
 */

/**
 *  Inside a class if you want to call class function recursively
 *  then use this keyword at the start of function name
 *  refer below code for eg 
 * 
 */
// class Solution {
    
//     search(A,l,h,key) {
//       //code here
//       if( l > h) return -1;
      
//       var m = Math.floor( (l + h) / 2 );
       
//        if( key === A[m]) return m;
       
//        if ( A[l] <= A[m] ){
           
//            if( key >= A[l] && key <= A[m])
//             return this.search(A, l, m -1, key);
           
//             return this.search(A, m + 1, h, key);
//        }
       
//        if( key >= A[m] && key <= A[h] ) 
//        return this.search(A, m + 1, h, key);
       
//        return this.search (A, l, m - 1, key);
//    }
// }

// var A = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
// var n = A.length;
// var obj = new Solution
// console.log(obj.search(A, 0, n-1, 3));