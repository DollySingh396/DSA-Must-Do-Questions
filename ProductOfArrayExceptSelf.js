var productExceptSelf = function(nums) {
    
    /**
     *  Initialising variable left product and right product and output array
     */
    let leftProduct = 1;
    let rightProduct = 1;
    let outputProduct = [];

    /**
     *  Starts calculating left product from 0 to n 
     *  for 0 no left elements so simple put 1 in output[0]
     *  for rest indexex output will have product of all left indexes
     *  so we will calculate leftproduct and assign it to output array
     */
    for( let i = 0; i < nums.length; i++){ // -------- O(N)
        outputProduct[i] = leftProduct;
        leftProduct *= nums[i];
    }
    /**
     *  now again traverse the array from right end from n-1 to 0
     *  for n-1 output will be product of all left elements which is already in output array
     *  so simple multiply with right product which is intially 1
     *  also we keep on calculating right side elements product 
     *  since output array has left product and we multiply the right product so we will get product of all elements except self
     *  
     */
     for( let i = nums.length - 1; i >= 0; i--){ // -------O(N)
            outputProduct[i] *= rightProduct;
            rightProduct *= nums[i];  
        }
    return outputProduct;
};

/**
 *  TC is O(N)
 *  SC is O(1) we are not including the output array in this bcz it was mentioned in the problem constraints
 */
var nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums))