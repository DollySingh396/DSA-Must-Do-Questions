/**
 *  Unset a bit 
 *  means set the ith bit to 0
 */ 

var x = 181;  // 10110101
var i = 4;
var mask = ~( 1 << i)  // left shift by i and then 1's compliment
//~ is used to toggle all bits
console.log(mask)
console.log( x & mask ) // ans will be 1 0 1 0 0 1 0 1 => 165
                    //                 7 6 5 4 3 2 1 0  => 4 th bit is set to 0 from 1