/**
 *  we are setting the ith bit of x as 1
 */

var x = 18; // binary of 18 is 00010010 

var i = 3;  // so the 3rd bit of x from right side, starting from 0 index is 0

var mask = ( 1 << i); // leftshift 00000001 by 3 => 00001000

// 00010010 OR 00001000 => 00011010 which is 26 in decimal
console.log((x | mask)); // 26 here the 3rd bit from right is set as 1
