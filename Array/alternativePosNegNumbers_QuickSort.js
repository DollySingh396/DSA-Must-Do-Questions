// order of positive value and order of negative values is not maintained
/**
 *  Using Quick Sort approach 
 *  TC - O(N),
 *  SC - O(1)
 */
function rearrange(arr, n) {

    var i = -1;
    var j = 0;
    var pivot = 0;
    
    /**
     *  Using pivot as 0 sorting the array such that all negative values are at the start and positive values are at the end
     */
    for ( let k = 0; k < n; k++){
        if (arr[k] < pivot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]]
            j++;
        }
        else j++;
    }

    var negIndex = 0;
    var posIndex = i + 1; // positive values will start at index i+1 after completing the quick sort

    // we will swap all neg values with positive values
    // as we want the array to start with positive values
    // so even index (0 based) will have positive values
    // odd index will have negative values
    // that's why neg index is incrementing by 2
    while( negIndex < posIndex){
        [arr[posIndex], arr[negIndex]] = [arr[negIndex], arr[posIndex]];
        negIndex += 2;
        posIndex += 1;

    }

    return arr;
}
/**
 *  Tc - O(N), SC - O(1)
 */
var a = [-5, 3, 4, 5, -6, -2, 8, 9, -1, -4]
var n = a.length;
console.log(rearrange(a, n))