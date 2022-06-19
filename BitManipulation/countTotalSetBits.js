/**
 *  Using Kernighans Algo
 */

var x = 141; // binary of 136 is 10001101
// initial count is 0
var count = 0;
// until the no x is 0
while(x){
    /**
     *  calculate the right most set bit mask
     *  then subtract the right most set bit mask from x
     *  and increase the count
     *  repeat all the steps until x is 0
     */
    var rmsbm = (x & -x);
    x -= rmsbm;
    count++;
}
console.log(count)
// TC - O(logn)
// SC - O(1)