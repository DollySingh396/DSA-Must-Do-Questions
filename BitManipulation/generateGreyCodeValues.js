/**
 *  using recursive approach to find all values
 */
function generateGreyCode(n) {

    // base condition - for n = 1, no of values are 0, 1
    if (n === 1) {
        return [0, 1];
    }

    // recursive call -- keep on calling the function till n reduces to 1
    var res = generateGreyCode(n - 1);
    
    //self work
    /**
     *  in the res [0, 1] array
     *  append 0 to the front of each value
     *  
     *  then read the res [0, 1] array in reverse order
     *  then append 1 to the front of each value
     */
    var output = [];
    for (let i = 0; i < res.length; i++) {
        output.push("0" + res[i]);
    }

    for (let i = res.length - 1; i >= 0; i--) {
        output.push("1" + res[i]);
    }

    // return the output;
    return output;

}
/**
 *  for a given value of n, generate all binary values of n digits as per grey code
 *  TC - O(2^N)
 *  SC - O(2^N) -- recursive calls
 */


var n = 3;// generate all 3 digits binary value in grey order
console.log(generateGreyCode(n))