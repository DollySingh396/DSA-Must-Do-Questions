/**
 *  Approach 1 - Character by Character Search
 */
var longestCommonPrefix = function (strs) {

    // initially the min length is the length of first varaibale
    var min = strs[0].length;

    /**
     *  finding the length of minimum string in the string array
     */
    for( let i = 1; i< strs.length; i++){
          if( min > strs[i].length ) min = strs[i].length
     }
    
     /**
      *  having an empty string
      */
    var s = '';

    /**
     *  traversing charachter by character till the minimum length of the string in strs array
     *  
     *  j loop is for character at index 0, 1, to min-1
     *  i loop is for traversing all the string elements of array strs
     *  
     */
    for(let j = 0; j < min; j++ ) { //---- O(m)
        // storing the char at jth index of 0th tsring
        var c = strs[0].charAt(j);

        /**
         *  for each string check if the character c is also present in other strings
         *  if the charachter c is common in all strings
         *  then add that character to s
         *  
         *  here advantage of character by character comparision is
         *  if there is a string whose even first character is not same as rest of strings
         *  then in the first loop only we will get the result
         *  no need to traverse further
         *  
         */ 
        for( let i = 1; i < strs.length; i++){ //-----O(n)

            // if c is same as character of ith string at jth index then continue
            if( c === strs[i].charAt(j) ) continue
            else{
                // if not even a single character is same then return  -1
                // else return whatever common prefix found till now
                if( s === '') return -1;
                else return s;  
            } 
        }
        /* after com pleting all the strings for j th index
           if all strings have it 
            then add that character to s
        */
        s = s + c;

    }
    
  return s;
}

/**
 *  TC - O(n*m) where n is total number of strings and 
 *  m is length of the smallest string among all strings.
 *  
 *  SC - O(m) - a new string variable is used to store the common prefix which
 *  can be only of m length 
 */
var strs = ["flower","flow","floght","f"];
console.log(longestCommonPrefix(strs));

/**
 *  Approach 2 - Using built in function
 */

// var longestCommonPrefix = function (strs) {

//     /**
//      *  we are using inbuilt functionof js 
//      *  reduce will take two strings at a time and find the common prefix of those two strings
//      *  the while loop will run till the min length of the string, among the two strings
//      *  whatever is common is returned 
//      *  and that value is used as prev for the next string value
//      *  this will keep on repeating till the last string value of array
//      *  
//      * 
//      */
//     return strs.reduce( (prev, next) => {
//         let i = 0;
//        while( prev[i] && next[i] && prev[i] === next[i]){
//            i++;
//        } 
//         //console.log(prev.slice(0,i))
//         return prev.slice(0,i);
//     });


// }

// TC - O(N*M) and SC - O(1)
// var strs = ["flower","flow","floght"];
// console.log(longestCommonPrefix(strs));