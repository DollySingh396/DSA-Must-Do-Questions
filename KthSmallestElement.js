/**
 *  Using Quick Select
 *  Go thorugh JavaScript Implementation of Quick Sort
 *  Below code is working fine but time limit is exceeding
 *  Time may decrease using random pivots 
 *  once try with random pivot 
 */
function kthSmallest(arr, l, r, k) {
    var index = partition(arr, l, r);
    /**
     *  If the k value is same as index + 1 then it is the value we are looking for
     *  so simply return the value at index
     */
    if( index + 1 == k) return arr[index];
    else if (index + 1 < k) return kthSmallest(arr, index + 1, r, k); 
    else return kthSmallest(arr, l, index - 1, k);         
}

function partition(arr, l, r) {
    var i = l - 1;
    var pivot = arr[r];
    for (let j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    i++;
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
}

var arr = [7, 10, 4, 3, 20, 15];
var l = 0;
var n = arr.length;
var r = n - 1;
var k = 3;
console.log(kthSmallest(arr, l, r, k))