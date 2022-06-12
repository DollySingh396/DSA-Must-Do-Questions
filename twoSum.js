var twoSum = function(nums, target) {

    let obj = {};
    /**
     *  Iterating the whole array
     * 
     */
    for(let i = 0; i < nums.length; i++){

        // calculating the value for each array entry
        let val = target - nums[i];
        // if that value is already oin object then simply return the array index and value index
        if( val in obj){
            return [obj[val], i]
        }
        // else create a new key in object for further comparisions
        else{
            obj[nums[i]] = i;
        }

    }
};

/**
 *  TC - O(N)
 *  SC - O(1) only one object is created to store the array values with their respective indexes
 */
var nums = [2,7,11,15];
var target = 9;
console.log(twoSum(nums, target));