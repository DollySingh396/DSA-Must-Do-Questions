/**
 *  Check a bit
 */
var x = 211; // 11010011
var y = 198; // 11000110
var i = 4;
var mask = ( 1 << i); // 00010000

// here the res is non zero so bit is ON means bit at 4 index from right is 1

(x & mask) === 0 ? console.log("bit is OFF") : console.log("bit is ON") ;

// here the res is zero so bit is OFF means bit at 4 index from right is 0
(y & mask) === 0 ? console.log("bit is OFF") : console.log("bit is ON") ;