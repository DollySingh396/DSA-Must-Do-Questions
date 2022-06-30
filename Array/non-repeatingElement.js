function firstNonRepeating(arr, n) {
    //code here
    var m = new Map();
    
    // traversing the array and storing the value of array in map
    // if value  is vistied for the irst time then store value true
    // if value is visited more than once then make its value as false

    for (let i = 0; i < n; i++) {
        if (!m.has(arr[i])) {
            m.set(arr[i], true);
        }
        else m.set(arr[i], false);
    }

    // now iterating the keys of map
    // if for any key the value is true return that key
    // otherwise no key with value true is found then return 0
    
    for (const val of m.keys()) {
        // when the first match is found it will return 
        // so we will get the first non-repeatin value
        if (m.get(val) === true) {
            return val;
        }
    }
    return 0;
}
/**
 *  return the first non repeating value 
 *  TC - O(N)
 *  SC - O(N)
 */
var arr = [9, 4, 9, 6, 7, 4]
var n = arr.length; 
console.log(firstNonRepeating(arr, n))