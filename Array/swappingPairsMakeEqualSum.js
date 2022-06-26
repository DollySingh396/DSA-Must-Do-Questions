function findSwapValues(A, n, B, m) {
    //code here

    // two variable to store sum of a and sum of b
    var sumA = 0;
    var sumB = 0;

    // sort the array in ascending order
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // find total sum of A array
    for (let i = 0; i < n; i++) {
        sumA += A[i];
    }
    // find total sum of B array
    for (let i = 0; i < m; i++) {
        sumB += B[i];
    }

    // two pointers i for A and j for B
    var i = 0;
    var j = 0;

    // traversing both arrays
    while (i < n && j < m) {
        // after swapping the value finding the new sum of A and B arrays
        var newSumA = sumA - A[i] + B[j];
        var newSumB = sumB + A[i] - B[j];
        // if the new sum of A and B is equal then return 1
        if (newSumA === newSumB) {
            console.log(`pair to be swapped is ${A[i]} and ${B[j]}`)
            return 1
        }
        // if sum of A is greater, it means after swapping the array sum of A is greater than B's sum
        // so this value of B can't be used in A to make sum of A and B equal
        // so increment i
        else if(newSumA > newSumB) i++;
        // if sum of B is greater than sum of A, 
        // it means that after swap watever value of B is used in A is not large enough to make sum of A equal to sum of B
        // so increment B pointer so that A's sum afetr swap can increase
        else j++;
    }        
return -1;
}
/**
 *   TC - O(n + m) if arrays are already sorted
 *      O(nlogn + mlogm) if arrays are not sorted
 * 
 *   SC - O(1)
 * 
 */

/**
 *  given two arrays a and b
 *  need to find a pair - one value from a and one from b such that 
 *  on swapping a and b values the sum of a and b arrays become equal
 */

var a = [3, 6, 3, 3] // 3 3 3 6
var b = [4, 1, 2, 1, 1, 2] // 1 1 1 2 2 46

var n = a.length;
var m = b.length;
console.log(findSwapValues(a, n, b, m))