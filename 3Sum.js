var threeSum = function (nums) {

    /**
     *  If array length is less than 3 then triplet is not possible 
     *  so simple return empty array;
     */
    if (nums.length < 3) return [];

    /**
     *  creating a empty result array
     *  also sorting the array first
     */
    var res = [];
    nums.sort((a, b) => a - b);

    /**
     *  for each value of k in array, finding value of low and high 
     *  if the summ of k and low and high values is 0 
     *  then add that triplet in the result 
     *  also the triplets should not repeat
     */
    for (let k = 0; k < nums.length - 2; k++) {

        /**
         *  only for k = 0 and for k which are not duplicates we will find the low and high
         *  this will help us to find only unique triplets
         */
        if (k == 0 || (k > 0 && nums[k] !== nums[k - 1])) {
            /**
             *  low will start from next to k
             *  high is pointer at the end of array
             *  sum is the negation of k because i+j+k = 0
             *  so i+j = -k
             */
            var low = k + 1;
            var high = nums.length - 1;
            var sum = 0 - nums[k];

            /**
             *  we need to keep on finding the low high values untill low is greaterthan high
             *  
             */
            while (low < high) {
                /**
                 *  if we found any combinationof low and high such that 
                 *  its total is same as sum
                 *  then push that triplet in result array
                 *  after pushing increment low and decrement high
                 *  also to avoid duplicate elements of array keep on increasing the low value
                 *  until the two successive values are different 
                 *  same for high
                 */
                if (nums[low] + nums[high] === sum) {
                    res.push([nums[low], nums[k], nums[high]]);
                    low++;
                    high--;
                    while (low < high && nums[low] === nums[low - 1]) low++;
                    while (low < high && nums[high] === nums[high + 1]) high--;
                }
                /**
                 *  if total of low and high is  not same as sum then
                 *  we will increment the low if total is less than sum 
                 *  or decrement high if total is greater than sm
                 *  this is valid bcause the array is sorted 
                 */
                else if (nums[low] + nums[high] < sum) low++;
                else high--;
            }
        }
    }
    return res;
};

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));