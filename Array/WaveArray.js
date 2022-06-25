function convertToWave(arr, n){

    // traverse the array and check if the value at even index is less than its adjacent value
    // then swap the values
    for( let i = 0; i < n ; i++){
        if( (i % 2) == 0 ){
            if( arr[i] < arr[i+1] )
             [ arr[i+1], arr[i] ] = [ arr[i], arr[i+1] ]
        }
    }
    return arr;
}
/**
 *  given array is sported in ascending order
 *  TC - O(N)
 *  SC - O(1)
 */
var arr = [3, 6, 5, 10, 7, 20];
var n = arr.length;
console.log(convertToWave(arr, n));