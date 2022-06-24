function duplicates(a, n){
     
    var arr = [];

    // traverse the whole array and modify the array such that it can act as frequency array
    // index = a[i] % n, is done to get the original value at a[i]
    // at a[index] we are storing modified value by adding n
    for( let i = 0; i < n; i++) 
        a[ a[i] % n] += n;
    
    for( let i = 0; i < n; i++){
        // check if on dividing the a[i] value by n the quotient is greater than 1 then definitely it is repeating
        // and add i in result array
        if( Math.floor(a[i]/n) > 1){
            arr.push(i);
            console.log(arr)
        }
        
    }

   // if there is no repeating value then add -1 
    if( arr.length === 0 )
    arr.push(-1)

    return arr;

       
}
/**
 *  find the duplicates in ana array
 *  TC - O(N)
 *  SC - O(1) // output array is not considered
 */
var a = [0, 3, 1, 2];
var n = a.length;
console.log(duplicates(a, n))