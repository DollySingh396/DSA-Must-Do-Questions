function find(arr, n, x) {

    /**
     *  we are calling binarySearch 2 times
     *  once to find the lowerBound
     *  and once to find the upperbound
     */
    var firstInd = binarySearch(arr, n, x, -1);
    var lastInd = binarySearch(arr, n, x, 1);

    if (firstInd == -1)
        return [-1, -1]
    else return [firstInd, lastInd]



}

function binarySearch(arr, n, x, tog) {
    var left = 0;
    var right = n - 1;
    var ans = -1;

    while (left <= right) {
        var middle = Math.floor((right + left) / 2);

        if (arr[middle] < x) left = middle + 1;
        else if (arr[middle] > x) right = middle - 1;
        else {
            //  x is found then store that index in ans
            // to get lowerbound we will look to left side so right = middle -1
            // to get upperbound we will look to the right side so left = middle + 1
            // we are using tog which stores -1
            // tog helps to identify whether we are looking for first occurance or last occurance
            // if first then tog is -1
            // if last then tog is +1
            ans = middle;
            if (tog == -1) right = middle + tog;
            else left = middle + tog

        }
    }

    return ans;
}

/**
 *  find first occurance index and last occurance index
 *  TC - O(logN), SC - O(1)
 */
var arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
var n = arr.length;
console.log(find(arr, n, 2))