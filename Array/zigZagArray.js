function zigZag(arr,n){
    //code here

    // traverse the whole array
    /**
     *  here main idea is
     *  if the index is even  then we want the even index value to be less than its cosecutive value
     *  if index is odd thenwe want its value to be greater than its consecutive value
     */
    for( let i = 0; i < n; i++){
         if( i % 2 != 0 && arr[i] < arr[i+1] )
          [ arr[i+1], arr[i] ] = [ arr[i], arr[i+1] ];

        else if ( i % 2 == 0 && arr[i] > arr[i+1] )
         [ arr[i+1], arr[i] ] = [ arr[i], arr[i+1] ];
   }
   
    return arr
}
/**
 *  given an array 
 *  we need to print the array elements in zigzag form
 *  TC - O(N)
 *  SC - O(1)
 */
var arr = [4, 3, 7, 8, 6, 2, 1];
var n = arr.length;
console.log(zigZag(arr, n))