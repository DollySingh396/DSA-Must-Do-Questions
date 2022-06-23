function leaders(a, n){
    // code here

    /**
     *  initializing the leaders with -1
     */
    var leader = -1;
    var arrayLeaders = [];
    let i = n-1;

    /**
     *  traversing the whole array from i = n-1 to 0
     */
    while( i >= 0){
        /**
         *  whenever the a[i] value is greater than existing leader then
         *  push a[i] value in the output array and update the leader
         */
        if( a[i] >= leader){
            arrayLeaders.push(a[i]);
            leader = a[i];
        } 
        // decrement the i value
        i--;
    }
    return arrayLeaders.reverse();
}

/**
 *  Find the leaders in given array
 *  Tc - O(N), SC - O(N)
 */
var a = [16,17,4,3,5,2];
var n = a.length;
console.log(leaders(a,n))

