function getPairsCount(arr,n,k){
    //code here

    // use map to store all visited elements and their frequency
    var m = new Map();
    var ans = 0;

    // traverse the whole array
    for( let i = 0; i < n; i++){

        // find the difference 
        var b = k - arr[i];
        
        // if difference is present in map themn add frequency of difference in ans
        if( m.get(b) ) ans += m.get(b);
    
        // difference is not in map then you need to increment the count of current element in map
        if( m.get(arr[i]) ) m.set( arr[i], m.get(arr[i]) + 1  );  
        // if the element is visited for the first time then set value as 1
        else m.set( arr[i],  1 );  
    }

    return ans;
}
    
/**
 *  Find all pairs which has sum k
 *  TC - O(N)
 *  SC - O(N)
 */
var arr = [1, 1, 1, 1];
var k = 6;
var n = arr.length;
console.log(getPairsCount(arr, n, k))