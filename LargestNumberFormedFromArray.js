function printLargest(arr){
    
    /**
     *  Corner cases
     *  if there is no array or array length is 0 
     *  then return 0
     */
    if(!arr || arr.length === 0) {
        return '0';
    }

    /**
     *  sorting the array values based on the logic mentioned
     *  so we will make two strings by concating ab and ba
     *  so depending on the difference it will sort the array
     *  such that the digits which form larger value will be swapped
     */
    arr.sort( (a,b) => `${b}${a}` - `${a}${b}`)

    console.log(arr)
    /**
     *  if after sorting the first digit of sorted array is 0 
     *  then simple return 0
     *  because it means that it is forming 0 or consecutive 000s
     */
    if(arr[0] === 0) {
        return '0';
    }

    /**
     *  return after joining the digits to get the largest number possible
     *  
     */
    return arr.join('');
}
/**
 *  TC - O(NlogN) -- sorting
 *  SC - O(1)  -- constant 
 */
arr = [3, 30, 34, 5, 9];
console.log(printLargest(arr));