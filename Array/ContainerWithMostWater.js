var maxArea = function(height) {
    /**
     *  Initialising the variables
     *  left pointer as 0
     *  right pointer as n-1
     *  maximum water initially as 0
     *  and water as 0 
     */
    var water = 0;
    var left = 0;
    var right = height.length - 1;
    var maximumWater = 0;
    /**
     *  if there are less than 2 blocks then container can't store water
     *  so return 0
     */
    if( height.length < 2) return 0;

    /**
     *  Traverse the whole array till left is less than right
     */
    while( left < right){
        /**
         *  calculating the water height 
         *  here also whichever side has minimum height we will start calculating from that side
         *  so take minimum of left and right
         */
        var waterHeight = Math.min(height[left], height[right]);
        /**
         *  after calculating water height need to find area of container
         *  so water height * width of container 
         *  width of container is right - left
         */
        water = waterHeight * ( right - left);
        
        /**
         *  if current water calculated is more than maxium water till now
         *  update the maximum water
         */
        if( maximumWater < water) maximumWater = water;

        /**
         *  if left side height is less then we will fill from left sid
         *  so left ++
         *  else fill from right side so right--
         */
        if( height[left] < height[right] ) left++
        else right--

    }
    return maximumWater
};
/**
 *  Using Trapping Water Approach  
 *  TC - O(N) - traversing the whole height array once
 *  SC - O(1) - constant 
 */
var height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));