function rowWithMax1s(arr, n, m){
    // code here

    /**
     *  initialise j with last index value of m
     */
    var j = m - 1; 
    // initially considering that no row is found which has 1 in it 
    var row = -1;

    /**
     *  travesring for each row i
     *   
     *  for each row whatever last value of j is we will start looking from that value bcz
     *  if any row has 1 starting from lower index then we will update the row bcz that row has more 1s
     */
    for (let i = 0; i < n; i++){

        var found = false;
        /**
         *  keep on decreasing the j value until a 0 is found
         */
        while (j >= 0 && arr[i][j] === 1) {
            j--;
            // also if row has 1 then set the flag to true
            found = true;
        }
        
        /**
         *  in row i we found 1 for j column if yes then flag is set to true 
         *  and we will update the row
         */
        if (found)
            row = i
    }

    /**
     *  if no row is found then return -1
     *   else return the row having max 1s
     */
    if (row === -1) return -1;
    return row;
}
var arr = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
]

// TC - O(N+M) SC - O(1)

var n = arr.length;
var m = arr[0].length;
console.log(rowWithMax1s(arr, n, m));

/**
 *  dry run
 *  value of i is 0
    value of j is 0
    value of i is 1
    value of j is 0
    value of i is 2
    value of j is -1
    value of i is 3
    value of j is -1
    ans is 2
 */

