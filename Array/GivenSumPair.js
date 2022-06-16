function findPair(arr, sum) {

    /**
     *  for loop  to find the pivot 
     *  pivot is that element whose immediate next element is smaller than itself
     */
    for ( var i = 0; i < arr.length - 1; i++) { // ----- O(N)
        if (arr[i] > arr[i + 1])
            break;
    }

    /**
     *  Initialising the variables
     *  n = size of array
     *  left is the index which points to the smallest element of array
     *  right points to the largest element of array
     */
    var n = arr.length;
    var left = (i + 1) % n;
    var right = i;
    /**
     *  Count stores the count of such pairs whose sum is same as target sum 
     *  res is result array which will return the pair whose sum is same as sum and count
     * 
     */
    var count = 0;
    var res = []

    /**
     *  Traverse the array till left is not equal to right
     *  
     */
    while (left !== right) {

        /**
         *  Validating if the sum of left and right is same as sum
         *  if yes then increase teh count by 1 
         *  push the pair in res array
         *  move the left to the next pointer 
         *  move right to the previoud pointer
         *  here we are incrementing left and right in rotational manner
         */
        if (arr[left] + arr[right] === sum) {
            count++;
            res.push([arr[left], arr[right]]);
            if (left == (right - 1 + n) % n) break;
            left = (left + 1) % n;
            right = (right - 1 + n) % n;

        }

        // if sum is less need to increase the value so increment left pointer
        else if (arr[left] + arr[right] < sum) left = (left + 1) % n;
        // else increment the right pointer
        else right = (right - 1 + n) % n;
            
    }
// return teh count and res array
    return [count, res];
}

/**
 *  Given an array
 *  given sum 
 *  TC - O(N) 
 *  SC - O(1)
 *  
 */
var arr = [0, 2, -5, -5, -4, -3, -2, -2]
var sum = -7;
console.log(findPair(arr, sum));

/**
 *  in case if duplicates are present in array and only unique pairs are required
 *  the use below code for moving the pointers
 *  below else and elseif will move o pointer till all consecutive duplicates are covered
 */

/**
 *      else if (arr[left] + arr[right] < sum) {
            left = (left + 1) % n;
            while( arr[left] === arr[((left + 1) % n)] )
            left = (left + 1) % n;
        }
        // else increment the right pointer
        else {
            right = (right - 1 + n) % n;
            while( arr[right] === arr[((right - 1 + n) % n)] )
            right = (right - 1 + n) % n;
        }
 */



