function equilibriumPoint(a, n){

    /**
     *  if array has only one element then only one equilibrium point exists
     *  if array has two elements then no equilibrium point exists
     */
    if( n === 2) return 0;
    if( n === 1) return 1;
    
    // variables to maintain left sum and right sum
    var leftSum = 0;
    var rightSum = 0;

    /**
     *  traverse the whole array and store the sum of all left indexes
     *  now every index of array store the sum from 0 till that index
     */
    for( let i = 1; i < n; i++){
        a[i] = a[i] + a[i-1]
    }

    // total sum will last index value of a
    var totalSum = a[n-1];
    
    // traverse the array and get the left sum and right sum and compare
    // if same then return index
     for(  let i = 1; i < n-1; i++){
        leftSum = a[i - 1];
        rightSum = totalSum - a[i];

        if( leftSum === rightSum) return i+1;
        
     }
     return -1
 }

/**
 *  finding the equilbrium point suct that left sum is equal to right index
 *  TC - O(N), SC - O(1)
 */
var a = [1,2,6,4,0,-1];
var n = a.length;
console.log(equilibriumPoint(a, n))