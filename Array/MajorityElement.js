function majorityElement(a, size)
{
    // taking first array element as majority 
    // initialising the majority Index as 0 and its count as 1
    var majEleIndex= 0;
    var count = 1;


    /**
     *  Traversing the whole array
     *  if the current array element is same as majority index element then increase the count
     *  if not then decrease the count
     *  
     *  also check if the count is 0 
     *  if it is 0 then the majority element needs to be updated to th current element of array
     *  so majority index is updated to i 
     *  and make the count as 1 
     * 
     *  this loop will give us the candidate for majority element at majority index
     *  candidate element is the only possible majority element (if present)
     * 
     *  this technique always returns an element
     */
    for (let i = 1; i < size; i++){

        if (a[majEleIndex] === a[i]) {
            count++;
        }
        else {
            count--;
        }
        if (count === 0) {
            majEleIndex = i;
            count = 1;
        }
    }

    // making count as 0 to store the candiadte's count
    count = 0;

    // now travesre the whole array to check whether the count of majority element is greater than N/2
    // if yes return the element
    // if no return -1
    for (let i = 0; i < size; i++){
        if (a[majEleIndex] === a[i]) {
            count++;
        }
    }

    if (count > Math.floor(size / 2)) return a[majEleIndex];
    else return -1;

}
/**
 *  TC - O(N)
 *  Sc - O(1)
 */
var a = [3, 1, 3, 3, 2];
var n = a.length;
console.log(majorityElement(a, n));