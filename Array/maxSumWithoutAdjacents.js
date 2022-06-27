// Space Optimised of Stickler Thief
function findMaxSum(arr, n) {
    //code here
    var incl = arr[0];
    var excl = 0;
    var new_excl;
    
    /**
     *  at every house 
     *   we will exclude whatever max value we got til i-1 house
     *   we will include current value and whatever the i-1 house excluded
     *   
     */
    for (let i = 1; i < n; i++){
            new_excl = Math.max( incl, excl );
            incl = (arr[i] + excl);
            excl = new_excl; 
    }

    // return the max value we get either on including or excluding
    return Math.max(incl, excl);

}
/**
 *  TC - O(N), SC - O(1)
 */
var a = [ 5, 5, 10, 100, 10, 5]
var n = a.length;
console.log(findMaxSum(a, n))