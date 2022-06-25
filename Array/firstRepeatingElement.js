function firstRepeated(arr, n) {
    // your code here

    var obj = {};
    var min = -1;

    // traverse the array from the right
    // if element is found for the first time then store it in the object
    // if the element is seen again then update the min index value 
    // because the index is decreasing on traversal from right to left
    // so the min value will have an element which is repeating and has min index value
    for( let i = n-1; i >= 0; i--){
           if( obj[arr[i]] ) min = i;

           else obj[arr[i]] = i;
        }

        // if min is -1 return -1 as no repeating elements were found
        // otherwise return the 1 based index of repeating element
        // min stores the index so return min + 1
    return min === -1 ? -1 : min+1
   
}
/**
 *  return the element which is repeating and has min index among indexes of all repeating values
 *  TC - O(N) , SC - O(N)
 */
var arr = [1, 5, 3, 4, 6];
var n = arr.length;
console.log(firstRepeated(arr, n))