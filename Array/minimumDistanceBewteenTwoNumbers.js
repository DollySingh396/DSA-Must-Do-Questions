/**
 *  find the minimum distance between x and y
 */
function minDist(a, n, x, y){

    /**
     *  initially the x and y index are -1
     *  and difference is -1
     *  minimum difference is initialised with max value
     */
    var x_index = -1;
    var y_index = -1;
    var diff = -1;
    var min_diff = Number.MAX_SAFE_INTEGER;

    /**
     *  traversing the array
     *  if for any value of i x is present at i then update x index
     *  if y is present at i, update y index
     *  
     *  when both x and y indexes are updated 
     *  i.e they are no longer -1
     *  then find the difference between x and y 
     *  and also update the minimum distance
     */
    for( let i = 0; i < n; i++){

        
        if( a[i] === x) x_index = i;
          
        if( a[i] === y) y_index = i;
            
        if( x_index > -1 && y_index > -1){
            /**
             *  it is not always that x will be on left side of y
             *  or y will be on left side of x
             *  
             *  so depending on which index value is greater we will find the difference
             */
            if( y_index > x_index) diff = y_index - x_index;
            else diff =  x_index - y_index ;

            // updating the minimum value
            min_diff = Math.min( min_diff, diff);    
        }
        
    }

    // if x or y or both are not present in array return -1;
    // else return min diff
    if( x_index === -1 || y_index === -1) return -1;
    else return min_diff
}
/**
 *  TC - O(N);
 *  SC - (1)
 */
var a  = [2, 5, 3, 5, 4, 4, 2, 3];
var n = a.length;
var x = 3, y = 2;
console.log(minDist(a, n, x, y));
