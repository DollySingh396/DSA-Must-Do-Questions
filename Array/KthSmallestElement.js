// not working correctly
/**
 *  Using Quick Select
 *  Go thorugh JavaScript Implementation of Quick Sort
 *  Below code is working fine but time limit is exceeding
 *  Time may decrease using random pivots 
 *  once try with random pivot 
 */
function kthSmallest(arr, l, r, k) {

    if (k > 0 && k <= r - l + 1) {
        var pos = randomPartition(arr, l, r);
        /**
         *  If the k value is same as index + 1 then it is the value we are looking for
         *  so simply return the value at index
         */
        if (pos - 1 === k - 1) return arr[pos];
        else if (pos - 1 > k - 1) return kthSmallest(arr, l, pos - 1, k);
        else return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
    }

    return Number.MAX_VALUE;
    
}
function swap(arr, i, j) {
    [ arr[j], arr[i] ] = [ arr[i], arr[j] ];
}

function randomPartition(arr, l, r) {
    var n = r - l + 1;
    var pivot = Math.floor((Math.random()) * (n - 1));
    swap(arr, l + pivot, r);
    return partition(arr, l, r);

}

function partition(arr, l, r) {
    var i = l;
    var pivot = arr[r];
    for (let j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            i++;
        }
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
}

var arr = [12, 3, 5, 7, 4, 19, 26]; // 3 4 5 7 12 19 26 
var l = 0;
var n = arr.length;
var r = n - 1;
var k = 3;
console.log(kthSmallest(arr, l, r, k))