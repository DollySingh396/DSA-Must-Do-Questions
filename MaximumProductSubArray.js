var maxProduct = function(nums) {

    /**
     *  To find the max product we need to maintain min and max at every index
     *  beacuse of negative values present in array
     *  initialise max min and ans with first array element
     */
    var minimumProduct = nums[0];
    var maximumProduct = nums[0];
    var maxAns = nums[0];

    /** 
     *  Iterate over the array 
     *  if any value is negative then we need to swap max and min values 
     *  bcz on multipkying with neg no max wil become min and min will become max
     *  
     *  then we need to see whether the index at which we are has max value 
     *  or the previous max value * current element has more value
     * 
     *  similary we have to find min value among the current element or current element * min value till now
     *  
     *  the final ans will be max of ans and max 
     */
    for( let i = 1; i < nums.length; i++){ // ------ O(N)
        if( nums[i] < 0 ){
            [minimumProduct, maximumProduct ] = [maximumProduct, minimumProduct ];
        }
        minimumProduct = Math.min( nums[i], nums[i] * minimumProduct);
        maximumProduct = Math.max( nums[i], nums[i] * maximumProduct);
        maxAns = Math.max(maximumProduct, maxAns)
    }
    return maxAns;   
};
/**
 *  TC - O(N)
 *  SC - O(1)
 */
var nums = [1, 0, -20, 3];
console.log(maxProduct(nums));
