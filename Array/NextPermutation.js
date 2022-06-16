var nextPermutation = function (nums) {

    /**
     *  Traversing the whole array to find 
     *  the first decreasing index moving from end to start
     *  in given array [7, 2, 3, 1, 5, 4, 3, 2, 0], first decreasing index is 3 having value 1
     */
    for(let i = nums.length-1; i >= 0; i--) { // ------ O(N) worst case
         
        /**
         *  if will satisfy for 1 < 5 - true
         */
        if(nums[i] < nums[i+1]) {

            /**
             *  calling another function to find a value which is greater than 1 and less than 5
             *  so that we can swap 1 and the nextLarge value
             *  here nextLarge value is 2 because it is greater than 1 and less than 5
             */
            const large = nextLarge(i);

            // now we swap the value at i index and large index
            swap(i, large);
            // now reverse the array from i + 1 to get the next permutation
            reverse(i+1);
            return nums;
        }
    }
    
    // if the array is in descending order then simply reverse
    // no next permutation is possible so ans will be the ascending order array
    nums.reverse()
    
    // swaping the two values
    function swap(i, j) { // --------- O(1)
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // it is also swapping the start and end values to get them arranged in ascending order
    function reverse(idx) { // --------- O(n/2)
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) { 
        /**
         *  traverse from end to find the min value which is greater than 1 
         */
        for(let i = nums.length-1; i > idx; i--) { // -------- O(n)
            if(nums[i] > nums[idx]) return i;
        }
    }
    
    return nums;
};

// TC = O(N)  N is array size 
// SC = O(1) constant
arr = [7, 2, 3, 4, 5, 4, 3, 2, 0];
console.log(nextPermutation(arr));



