// Optimise Approach is pending for this problem using merge sort with no extra space
function Rearrange(a, n) {

    var pos = [];
    var neg = [];

    // storing all positive values in pos array
    for (let i = 0; i < n; i++) {
        if (a[i] > 0) {
            pos.push(a[i]);
        }
    }

    // storing all negative values in neg array
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) {
            neg.push(a[i]);
        }
    }
    
    //putting all negative values at the front of array a
    for (let i = 0; i < neg.length; i++) {
        a[i] = neg[i];
    }
    
    //putting all psitive values at the end of array a
    var j = 0;
    for (let i = neg.length; i < n; i++) {
        a[i] = pos[j++];

    }

    return a;
 }
/**
 *  This is a simple approach not optimised one.
 *  
 *  TC - O(N), SC - O(N)
 * 
 */
var a = [2, -4, 7, -3, 4];
var n = a.length;
console.log(Rearrange(a, n));