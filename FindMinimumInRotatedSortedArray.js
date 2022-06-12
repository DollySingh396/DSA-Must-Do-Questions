// /**
//  *  We have to find the minimum element in the array in O(logN) time
//  *  So we are using Binary Search 
//  *  TC - O(logN);
//  *  SC - O(1) --- some variables are used 
//  */

var findMin = function (nums) {

    /**
    *  Intialising two pointers low and high
    */
    var low = 0;
    var high = nums.length - 1;

    /**
     *  Initialising the minimum value with middle index value
     */
    var min = Math.floor((high + low) / 2);
    var minValue = nums[min];

    while (low <= high) {

        /**
         *  First Calculating the middle index
         */
        var middle = Math.floor((high + low) / 2);

        /**
         *  if the current middle index points to a value whihch is less than
         *  the current minimum value then store the middle index value in minimum value
         */
        if (minValue > nums[middle]) minValue = nums[middle];

        /**
         *  If the current middle index value is less than the value at high index 
         *  then we need to search for a lower value on the left side
         *  because right side will only have larger values than middle index value
         *  to search on the left side we will move the high pointer to middle - 1
         */
        else if (nums[middle] < nums[high]) high = middle - 1;

        /**
        *  if the middle index value is higher than high index value then
        *  the smaller values will be present on the right side of middle index 
        *  so we will move to the right side by setting low as middle + 1
        */
        else if (nums[middle] > nums[high]) low = middle + 1;

        /**
        *  if either of the above condition is not satisfied then we 
        *  simple return the minimum value
        */
        else return minValue;
    }
    // returns the minimum value found in array
    return minValue;
};

var nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
