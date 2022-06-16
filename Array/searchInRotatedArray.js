var search = function (nums, target) {

    var low = 0;
    var high = nums.length - 1;

    while (low <= high) { 
        var middle = Math.floor((low + high) / 2);
        
        if (target === nums[middle]) return middle;

        if (nums[low] <= nums[middle]) {     
            if (target >= nums[low] && target <= nums[middle]) high = middle - 1;
            else low = middle + 1;
        }else
         {
            if (target >= nums[middle] && target <= nums[high]) low = middle + 1;
            else high = middle - 1;
        }
    }
    return -1;
};
/**
 *  TC - O(logN) ------- Using Binary Search
 *  SC - O(1) only constants are used
 *  
 */
var nums = [4, 5, 6, 7, 0, 1, 2];
var target = 0;
console.log(search(nums, target));