// Approach One
function sort012(arr, N) {
    
    /**
     *  variables to store the count of 0 , 1, and 2
     */
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;

    /**
     *  traverse the array to get count of 0, 1,2
     */
    for (let i = 0; i < N; i++) {
        if (arr[i] === 0) count0++;
        else if (arr[i] === 1) count1++;
        else count2++;
    }
    // fill 0s from 0 to count0 -1
    for (let i = 0; i < count0 ; i++) {
        arr[i] = 0;
    }

    // fill 1s from coount0 to n - count2
    for (let i = count0; i < n - count2; i++) {
        arr[i] = 1;
    }
    
    // fill 2 in remaining places
    for (let i = n - count2; i < n; i++) {
        arr[i] = 2;
    }

    return arr;
}

/**
 *  Approach Two
 */
function sort012(arr, N){

    // initializing variables
        var low = 0;
        var mid = 0;
        var high = N-1;

    // traverse the array till mid is <= high
        while( mid <= high){

            // if mid value is 0
            // then swap with value at low
            // and low++ , mid++
            if( arr[mid] === 0){
                    [ arr[low], arr[mid] ] = [ arr[mid], arr[low] ]
                    low++;
                    mid++
                }

            // value is 1 then do nothing simply mid++
            else if( arr[mid] === 1 ) mid++;

            // value is 2 then swap the value with high index and do high--\
            // high-- is so that the last index value is not traversed again
            else{
                [ arr[high], arr[mid] ] = [ arr[mid], arr[high]]
                    high--;
            }
         
    }
 return arr
}



/**
 *   TC - O(N),
 *   SC - O(1)
 */
var arr = [0, 2, 1, 2, 0];
var n = arr.length;
console.log(sort012(arr, n))