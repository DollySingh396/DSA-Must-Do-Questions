function minValue(arr, brr, n){
    //code here

    // sorting array a and b
    /**
     *  sorting arr in ascending order
     *  sorting brr in descending order
     */
    arr.sort( (a,b) => a - b);
    brr.sort( (a,b) => b - a);

    // initial sum is 0
    var sum = 0;

    // iterating the whole array 
    // for each index finding product and adding into sum
    for( let i = 0; i < n; i++){
        sum += ( arr[i] * brr[i] )
    }

    return sum;
}

/**
 *  TC - O(NlogN) -- sorting 
 *  SC - O(1)
 */
var A = [6, 1, 9, 5, 4];
var B = [3, 4, 8, 2, 4];
var N = A.length;
console.log(minValue(A, B, N));