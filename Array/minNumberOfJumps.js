/** 
 *  Approach 1 - TC - O(N) SC - O(1)
 
function minJumps(arr, n) {
 
 // initialising maxReachable as arr[0] value
 // step to be taken will be arr[0] value
 // jumps initially will be 1 to go from 0 th index to any other i index


    var maxR = arr[0];
    var step = arr[0];
    var jump = 1;

// if size of array is 1 then no jumps so return 0
    if (n === 1) return 0;

// if first array value is 0 then can't move further so return -1
    else if (arr[0] === 0) return -1;
   
// else we can traverse the array to find min jumps
    else {
    
        for (let i = 1; i < n; i++) {
        // if we are at the last index return jump value
            if (i === n - 1)
                return jump;

        // find the max Reachable 
            maxR = Math.max(maxR, arr[i] + i);
        // for each avlue of i we are taking one step ahead so decrease step count
            step--;

        // if steps are 0 means we have taken all steps and need to make another jump
            if (step === 0) {
                jump++;
                // if the current i index is  ahead of max Reachable then we can't move furhter
                if (i >= maxR)
                    return -1;

                // after taking the jump update the new step count
                step = maxR - i;
            }
        }
    }
}



*/

// Approach 2 - DP
function minJumps(arr, n) {
   
    var jumps = new Array();
    
    var i, j;

    // if first element is 0,
    if (n == 0 || arr[0] == 0)
        return -1;
    // end cannot be reached

    jumps[0] = 0;

    // Find the minimum number of jumps to reach arr[i]
    // from arr[0], and assign this value to jumps[i]
    for (i = 1; i < n; i++) {

        // initialise the jump[i]  with max value
        jumps[i] = Number.MAX_VALUE;

        // for all values from 0 till i index
        for (j = 0; j < i; j++) {

            // if from j index with arr[j] value we can reach index greater or equal to i index
            // then we can definitelty move ahead
            // also if the jump[i] has some minimum jump value found already
            // i.e it don't have max value
            // then we will update the jumps[i] value with minimum value

            if (i <= j + arr[j] && jumps[j] != Number.MAX_VALUE) {
                console.log(`inside for i ${i} and j is ${j}`)
                // either the current jump[i] is minimum or the jump[j]+1 is minimum
                // jump[j] + 1 , 1 is to add 1 more jump made to reach arr[i] from 0
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
                console.log(jumps)
                break;
            }
            
        }
    }
    // now jumps[n-1] store the min value to reach arr[n-1] from arr[0]
    return jumps[n - 1];
}

/**
 *  TC - O(N*N)
 *  SC - O(N)
 */
var arr = [1, 3, 6, 1, 0, 9];
var n = arr.length;
console.log(minJumps(arr, n));