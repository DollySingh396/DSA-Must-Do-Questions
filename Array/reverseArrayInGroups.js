function reverseInGroups(arr, n, k){
    // traversing the whole array
    // i will be incremented to point the start of each subArray
    for( let i = 0; i < n; i += k){

        // start is initialised with i, i.e start of each subArray
        var start = i ;
        /**
         *  end can have 2 different values depending onthe subArray
         *  if we have the last subArray then if no of elements in last subArray are less than k size
         *  then the end will point to n-1
         *  for all the remaining subrrays end will point to start + k - 1
         */
        var end = Math.min( start + k - 1, n - 1);

        // for reversing we use 2 pointers start and end and swap values then increment start and decrement end
        while( start < end){
            [ arr[end], arr[start] ] = [ arr[start], arr[end] ];
            start++; 
            end--;
        }

    }

    return arr;
}
/**
 *  TC - O(N)  --- all iterations including for loop and while it will be O(N) in worst case
 *  SC - O(1)
 */

var arr = [1,2,3,4,5,6,7,8];
var n = arr.length;
var k = 3;
console.log(reverseInGroups(arr, n, k));
