/**
 *  This approach uses sort so TC O(NlogN) and SC - O(1)
 *  
 *  Other approaches are also possible like MaxHeap it will take TC O(n + k*logn)
 *  nd many other approaches like quick select 
 *  quick select is the best approach 
 *  implementing Kth Smallest Element using Quick select
 */
var findKthLargest = function(nums, k) {
    
    /**
     *  First sort the array
     *  then find the number at length - k index
     *  this will give kth largest element from end
     */
    nums = nums.sort( (a,b) => a-b);
    return nums[ nums.length - k];
    
};
var nums = [3,2,1,5,6,4];
var k = 2;
console.log(findKthLargest(nums, k))