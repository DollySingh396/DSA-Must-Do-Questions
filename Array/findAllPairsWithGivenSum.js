function allPairs(A, B, N, M, X){
    //code here

    // using object to store first array elements
    var obj = {};
    var output = []

    // in the object initialise all the elements which are present in array A
    for( let i = 0; i < N; i++){
        obj[A[i]] = 1;
    }

    // now traverse the array B
    /**
     *  we will find the difference of X and B element at index i
     *  if the diff value is present in object 
     *  it means that array A has this value and one pair is found which has sum X
     */
    for( let i = 0; i < M; i++){
        var diff = X - B[i];
        if( obj[diff] ) output.push( [diff, B[i]])
    }

    // sorting the output array on the basis of first value of pair
    // arranging in ascending order
    output = output.sort( (a,b) => a[0] - b[0]);
    return output;
}
/**
 *  given two arrays and sum value X
 *  TC - O(max(N, M))
 *  SC - O(N) -- for object
 */
var A = [-1, -2, 4, -6, 5, 7];
var B = [6, 3, 4, 0];
var X = 8;
var N = A.length;
var M = B.length;
console.log( allPairs(A, B, N, M, X))