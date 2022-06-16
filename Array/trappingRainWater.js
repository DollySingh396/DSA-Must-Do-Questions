var trap = function (height) {

    /**
     *  Initialising variables
     *  noOfBlocks - total no of blocks available in array i.e. 12
     *  width of each block is given in the question i.e 1
     */
    var noOfBlocks = height.length;
    var width = 1;

    /**
     *  Corner Case - If no of blocks are less than 3 then they can not trap water
     */
    if (noOfBlocks <= 2) return 0;

    /**
     *  leftHeight - variable to store left maximum height till now
     *  rightHeight - variable to store right maximum height till now
     *  waterHeight - initial waterheight is 0
     */
    var leftHeight = height[0];
    var rightHeight = height[noOfBlocks - 1];
    var waterHeight = 0

    /**
     *  two pointers left and right to traverse the array 
     *  initialised the left from second array index i.e. 1
     *  initialised the right from second last array index i.e. n-2
     */
    var left = 1;
    var right = noOfBlocks - 2;

    // initially trapped water is 0
    var trappedWater = 0;

    // traverse the array till left pointer become greater than right pointer
    while (left <= right) {

        /**
         *  This if is to check which height is minium 
         *  We will start calculating the trap water only from the minimum height side
         *  because that will decide the possible water height 
         *   if left height is minimum height then start traversing from left
         */
        if (leftHeight < rightHeight) {
            waterHeight = leftHeight;
            /** 
             *  If the current block height is greater than water height then it will not trap water
             *  so add 0 to trapped water
             *  otherwise in else add the difference of water height minus block height multiply by width
             * 
             */
            if (height[left] > waterHeight) trappedWater += 0
            else trappedWater += ((waterHeight - height[left]) * width);

            /** 
             *  if the current block has more height then maximum left height variable then
             *  store the current block height in left height variable
             */
            if (leftHeight < height[left]) leftHeight = height[left]
            // moving to the next block from left side
            left++;


        }
        else {
            /**
             *  if the minimum height block is on right side then we will start traversing from right side
             *  rest steps are same as above
             */
            waterHeight = rightHeight;
            if (height[right] > waterHeight) trappedWater += 0;
            else trappedWater += ((waterHeight - height[right]) * width);
            if (rightHeight < height[right]) rightHeight = height[right]
            // moving to the next block from right side
            right--;
        }
    }
    // return the total trapped water amount 
    return trappedWater;
};

/**
 *  This ia the most optimised approach
 *  TC - O(N)
 *  SC - O(1)
 */

// given an array of block's height
var blockHeight = [4, 2, 0, 6, 2, 3, 5];
console.log(trap(blockHeight));