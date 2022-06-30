function maximizeSum(arr, n, k){
    //code here
    var sum = 0;
    var i = 0;
    
    // first sort the arary so that all negative values come at the start
    arr.sort((a, b) => a - b);

    // traverse the array and if we found any value less than 0 then make it positive
    // we will perform this operation on first k values only of sorted array
    for (let i = 0; (i < k) && (arr[i] < 0); i++)
            arr[i] = -(arr[i]);
    
    // after making neg values positive sort array again to get smallest value at the start
    arr.sort((a, b) => a - b);

    // now if k is even value then no need to do anything because it will have no effect on sum
    // if it is odd value then negate the smallest value so as to maximise the sum
    // k is 5 and i is 3 so k - i is 2 which is even 
    // so we can skip this if part
    if( (k-i) % 2)
        arr[0] = -(arr[0]);
    
    // get the sum of all array values
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    return sum;
}
/**
 *  find max sum after k negotaitaions
 *  TC - O(NlogN)
 *  SC - O(1)
 */
var arr = [5, -2, 5, -4, 5, -12, 5, 5, 5, 20];
var n = arr.length;
var k = 5;
console.log(maximizeSum(arr, n, k));