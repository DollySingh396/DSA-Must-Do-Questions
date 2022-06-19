var x = 136; // binary of 136 is 10001000
/**
 *  To get the rightmost set bit of a binary string perform below steps -
 *   
 *  1. get 2's compliment of x 
 *  2. how to get 2's compliment of x :
 *     2.1 get 1's compliment of x and add binary 1 to it, it will give 2's compliment of x
 *     2.2 directly negate the number x because negative of a number is its 2's compliment 
 *  3. then perform AND on x and 2's compliment of x      
 */

// in order to print the binary number
// we will convert the number to binary by passing the radix/base as 2
// so toString method will now know to convert it in binary

// TC - O(1)
// SC - O(1)
console.log( (x & -x).toString(2) ) // 2.2
console.log( ( x & ( (~x) + 1 ) ).toString(2) ) // // 2.1
