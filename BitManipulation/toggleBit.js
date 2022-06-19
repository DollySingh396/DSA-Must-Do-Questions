/**
 *  here we will toggle the bit 
 *  if it is 0 toggle to 1
 *  if it is 1 toggle to 0
 */
var x = 181; // 10110101
var i = 4; 
var mask = ( 1 << 4); // 00010000
console.log( x ^ mask); // 10100101 => 165
// 4 bit from the right side is set to 0 from 1