function threeWayPartition(array, a, b)
{
    // initilaizing variables 
    var low = 0;
    var high = array.length - 1;
    var mid = 0;


    // while mid is less than high
    while (mid <= high) {
        /**
         *  if mid value is less than a then swap with low value and increment low and mid
         */
        if (array[mid] < a) {
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        }
        /**
         *  if mid is pointing to a value between range a-b then only increment mid
         */
        else if((array[mid] >= a) && (array[mid] <= b)) mid++;
        /**
         *  else mid is pointing to value greater than b then simply swap with high
         *  and deecrement high
         */ 
        else{
            [array[high], array[mid]] = [array[mid], array[high]];
            high--;
        }
        
    }
    return array;
}
/**
 *  given array and the range [a, b]
 *  
 *  arrange the array elements such that all values less than a appear first
 *  then all values in the range of [a, b] should come next
 *  then all values greater than b should come at the end
 * 
 *  TC - O(N)
 *  SC - O(1)
 *  
 */
var arr  = [3, 2, 7, 3, 5, 1, 4]
var a = 2;
var b = 5;
console.log( threeWayPartition(arr, a, b))