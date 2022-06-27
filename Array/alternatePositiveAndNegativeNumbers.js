function rearrange(arr, n){
    //code here

    var pos = [];
    var neg = [];

    // stopring all negative values in neg array
    // all positive values in pos array
    for (let i = 0; i < n; i++){
        if (arr[i] < 0) neg.push(arr[i]);
        else pos.push(arr[i]);
    }

    var j = 0;
    var k = 0;
    
    // traversing the whole array
    for (let i = 0; i < n; i++) {

        // if index is even and pos array has values
        // then place the value of pos array in array 
        if((i % 2 === 0) && (pos[j] !== undefined)) {
            arr[i] = pos[j++];
        }
        // if index is odd and neg array has values then 
        // put neg array value in array
        else if((i % 2 !== 0) && (neg[k] !== undefined)) {
            arr[i] = neg[k++];
        }
        // if  no neg array values are left then at the end put all pos array values
        //
        else if ( neg[k] === undefined ) {
            arr[i] = pos[j++];
        }
        //  if no pos array values are left then put all neg array values at the end
        else if (pos[j] === undefined) {
            arr[i] = neg[k++];
        }
        
    }
   
    return arr;
}
/**
 *  Tc - O(N), SC - O(N)
 */
var a = [9, 4, - 2, -1, 5, 0, -5, -3, 2, 11, 12]
var n = a.length;
console.log(rearrange(a, n))