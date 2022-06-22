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
 *   TC - O(N),
 *   SC - O(1)
 */
var arr = [0, 2, 1, 2, 0];
var n = arr.length;
console.log(sort012(arr, n))