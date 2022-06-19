/**
 *  Find the triplets such that their sum is 0
 *  eg i + k + j = 0;
 */
function findTriplets(arr, n) {
    
    /**
     *  first sort the array - O(NlogN)
     */
    arr.sort( (a, b) => a - b);
    // initially the triplets exists is false
    // if we found any triplet then we make it true;
    var tripletExists = false;

    /**
     *  traversing the whole array such that 
     *  for each value of k we are finding a pair i, j such that
     *  i+j+k = 0
     */
    for( let k = 0; k < arr.length - 2; k++){

        // the i + j should be equal to -k
        // so we got sum as -> 0 - value of k
        var sum = 0 - arr[k];
        /**
         *  for each k, the value of i is k+1
         *  because the array is sorted
         *  anf j is the last index of array 
         */
        var i = k+1;
        var j = arr.length - 1;

        /**
         *  keep on traversing the array till i < j, for each k value
         * 
         */
        while( i < j){

            /**
             *  if value of i and j is equal to sum
             *  then make tripleExists as true
             *  and return 1
             */
            if( arr[i] + arr[j] === sum ){
                tripletExists = true;
                return tripletExists ? 1 : 0
            }

            /**
             *  if value of i + j is not equal to sum
             *  then check if i+j is less than sum if yes move i to i++
             *  because the array is sorted so on inremneting i, i+j also increases
             */
            else if ( arr[i] + arr[j] < sum ) i++;
            // else decrease j to decrease the sum
            else j--;
         }
    }
    return tripletExists ? 1 : 0
}
/**
 *  TC - O(NlogN) + O(N*N) = O(N^2)
 */
var arr = [97, -27, 2, -34, 61, -39];
var n = arr.length;
console.log(findTriplets(arr, n))

