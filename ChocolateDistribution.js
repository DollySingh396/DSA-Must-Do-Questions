function findMinDiff(arr,n,m){
    //initialising varaibles
    /**
     *  start will point to the start of window of size m
     *  end will point to the end of window of size m
     */
    var start = 0;
    var end = m-1;
    var first = 0;
    var last = 0;

    //corner cases
    /**
     *  either if no of students - m are 0 i.e. m = 0
     *  or no of packets of chocolates - n are 0 i.e n = 0
     */
    if( m === 0 || n === 0) return 0;

    /**
     *  if the no of students are more than no of packets of chocolates
     *  then each student won't be able to get a packet
     *  this doesn't fulfill the basic requirement
     *  so return -1
     */
    if( n < m ) return -1;

    /**
     *  first sort the array 
     *  Using inbuilt sort and best sort is Merge Sort
     *  Time complexity of sort will be n*logn
     */
    arr.sort( (a,b) => a-b ); 
    
    /**
     *  Initialising difference variable with the maximum value of chocolates
     *  We ne need to minimise the difference variable value
     *  after sorting the packet with maximum chocolates wil at the n-1 index
     */
    var diff = arr[n-1];
    
    
    /**
     *  Traverse the array of packets till we reach the last of all packets
     *  in worst case the while will run n times 
     *  TC is O(n)
     *  traverse till the end of window reaches the last index of packets
     */
    while( end <= n - 1){
        /**
         *  if the previous difference is greater than the current difference
         *  then update the difference with current difference value
         */
        /*
        * Find the subarray of size m such that difference between
        * end (maximum in case of sorted) and start (minimum in case of sorted) elements of
        * subarray is minimum.
        */
        if( diff > arr[end] - arr[start]){
            diff = arr[end] - arr[start]
            // storing the first and last index of subarray with minimum difference
            first = start;
            last = end;
        }

        // move the start and end to their consecutive next index respectively
        start++;
        end++;
    }
    
    // Total TC = O(n*logn) + O(n) = O(n*logn)
    // Total SC = O(1) because only few variables are used
    // return the minimum difference possible
    return [diff, first, last];
}

/**
 *  each packet of chocolate has different cho  colates
 *  total packets are 8
 *  total students are 5 
 *  arr represents different sizes of packets 
 */
var arr = [3, 4, 1, 9, 56, 7, 9, 12];
var m = 5; // no of students
var n = arr.length; // no of packets of chocolates
console.log(`Minimum Difference Possible is: ${findMinDiff(arr, n, m)[0]}`);
var stratOfSubArray = findMinDiff(arr, n, m)[1];
var endOfSubArray = findMinDiff(arr, n, m)[2];

// printing the subArray with minimum difference possible
for( let j = stratOfSubArray; j <= endOfSubArray; j++ ){
    console.log(arr[j]);
}

