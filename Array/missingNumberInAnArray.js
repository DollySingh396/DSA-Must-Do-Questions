function MissingNumber(array,n){
   
    // initialising the xor variable with 0
    var tempXOR = 0;

    /**
     *  traversing the whole array and doning xor of each value
     */
    for( let i = 0; i < n - 1; i++)
        tempXOR ^= array[i];

    /**
     *  again xoring with i values from 1 to N
     *  this will remove all values which has occured twice
     *  and only value which was missing will be left
     */
    for( let i = 1; i <= n; i++)
        tempXOR ^= i;
       
    return tempXOR
}
/**
 *  TC - O(N)
 *  SC - O(1)
 */

var array = [6,1,2,8,3,4,7,10,5];
var n = array.length + 1;
console.log(MissingNumber(array, n))