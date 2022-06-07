/**
 *  Using Objects
 *  To find length of object use Object.keys(obj).length
 */
var containsDuplicate = function(nums) {
    /**
     *  create a new object to store all elements of array as key and 
     *  their value as true if they are not present in the object
     *  
     */
    var obj ={}
    // iterating the whole array
    for( let i = 0; i<nums.length; i++){
        // if object already has nums[i] as key, then their value will be true
        // then if condition will be true and it will return true
        // and break out of for loop
        if(obj[nums[i]]) return true;
        // if object don't have nums[i] as key then create a new key 
        // and store value as true
        else  obj[nums[i]] = true;
    }

    // if there are no duplicates then return false
    return false;
};

/**
 *  Using SETS
 * 
 *  Using property of SETS that sets don't allow duplicates
 *  sets store unique elements only
 */

 var containsDuplicates = function(nums) {

    // store the array values in a set
    var set = new Set(nums);
    /**
     * compairing the set size with array length
     * if duplicate elements are not present then set size and array length will be equal
     * if duplicates are present in array then 
     * set will store only unique elements and 
     * the set size will not be as same as array length
     * 
     */
    return set.size !== nums.length;
 }
var nums = [ 1, 7, 3, 2];
console.log(containsDuplicate(nums));
console.log(containsDuplicates(nums));


