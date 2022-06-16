var merge = function(intervals) {
    
    /**
     *  result array which holds only non overlapping values
     */
    var res = [];
    /** 
     *  first sort the given array using the start of each
     */
    intervals.sort( (a, b) => a[0] - b[0]); // -------- O(NlogN)
    /**
     *  Traversing teh whole given array  ------ O(N)
     */
    for( let i = 0, j = 0; i< intervals.length; i++){
 
        /**
         *  if it is the first pair then simple push it in result array
         */
        if( i === 0 ) res.push(intervals[0]);

        /**
         *  for the rest of array pairs
         */
        else{
            /**
             *  if start of new pair is greater than end of last pair in result
             *  then simply push 
             */
            if( intervals[i][0] > res[j][1] ){
                res.push(intervals[i])
                console.log(` inserted original value : ${res}`);
                j++;
            }
            /**
             *  if the start of new pair value and end of last pair in result value are same
             *  then the merged pair will have start value of last result pair and end value of new pair
             *  [ [1,4], [4, 5] ] = [1, 5]
             *  [1, 4] latest pair in result array
             *  [4, 5] is new pair
             */
            else if( intervals[i][0] === res[j][1] ){
                    var mergedValue = [ res[j][0], intervals[i][1] ];
                    res.pop();
                    res.push(mergedValue);
                    console.log(`when end of first and start of second has same value, merged is ${res}`)
            }
            else{
                /**
                 *  else simple push the value in result array 
                 *  the end value of merged pair will be taken as maximum of end value of end pair and end value of lastest pair in result
                 */
                var mergedValue = [ res[j][0] , Math.max( res[j][1], intervals[i][1])]
                res.pop();
                res.push( mergedValue );
                console.log(`in if merged value in res ${res}`);
            }
        }
    }
    return res;
};

/**
 *  TC - O(NlogN) + O(N) ==> O(NlogN);
 *  SC - O(1), if N is small, only one array is required to store the pairs
 *  for large value of N - O(N)
 *  we can also store the pairs directly in given array so then SC - O(1)
 *  refer gfg for O(1) SC approach
 */
var intervals = [ [6,8],[1,9], [2,4], [4,7] ];

// [1, 10], [1, 2],[1,5] 
// [1,4], [4,5], [5, 10]
// [1,10], [3,10], [6,10]
// all cases work for this code
console.log(merge(intervals));