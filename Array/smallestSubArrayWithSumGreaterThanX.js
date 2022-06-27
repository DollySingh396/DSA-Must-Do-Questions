function smallestSubWithSum(a, n, x){
    //code here

    var l = 0;
    var r = 0;
    var sum = 0;
    var length = 0;
    var minLen = Number.MAX_SAFE_INTEGER;

    while (r < n) {

        // get the sum 
        sum += a[r];

        // if sum is greater than x then find the length of window and store in min window length
        if (sum > x) {
            length = r - l + 1;
            minLen = Math.min(length, minLen);
        }

        // if sun is still less than or equal to x then increment r pointer
        else if (sum <= x) {
            r++;
        }

        // if we found a window subarray then we try to reduce its length
        if (length) {

            // till sum is greater than x we keep on dropping the left values of window
            // if on drooping the sum is still greater than x we update the window length and min length
            while (sum > x) {
                // found sum after removing the left pointer value
                sum -= a[l];
                // if sum after removing the left pointer value is still greater than x then it means a smaller window is possible
                // so move left pointer and update window length
                if ( sum > x) {
                    //sum -= a[l];
                    l++;
                    length = r - l + 1;
                    minLen = Math.min(length, minLen);
                }
                // if sum is not > x then simply move r to next pointer
                else {
                    r++;
                }
            }
            // if sum after subtracting left value is not > x then we need to add the left value again to make sum value as previous sum value
            sum += a[l];
        }
        
        
    }

    // return the min len of subarray
    return minLen;
}

/**
 *  TC - O(N)
 *  SC - O(1)
 */
var a = [6, 3, 4, 5, 4, 3, 7, 9];
var n = a.length;
var x = 16;
console.log(smallestSubWithSum(a, n, x))