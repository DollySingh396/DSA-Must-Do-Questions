var isValid = function(s) { 

    /**
     *  if the length of string is 1 then it is not valid 
     *  so return false
     */
    if(s.length < 2) return false;

    /**
     *  an array to track the parentheses
     */
    var res = [];

    /**
     *  traversing the whole string
     */
    for( let i = 0; i < s.length; i++){

        /**
         *  if character is opening parentheses then in array store the losing of that parentheses
         *  if character is closing parehtneses then pop the top of array
         *  if poped character is same as closing parentheses then continue with rest of string 
         *  if not then it is not valid return false
         */
        if( s.charAt(i) === '(') res.push(')');
        else if( s.charAt(i) === '[') res.push(']');
        else if( s.charAt(i) === '{') res.push('}');
        else if ( s.charAt(i) !== res.pop() ) return false;
        else continue;
    }
   
    /**
     *  if the output arrat has some length then it means string is not valid
     *  if length is 0 then it is valid
     *  so return !0 for true
     *  !some value for false
     */
    return !(res.length);
};

/**
 *  Given a string need to validate whether it is balanced or not
 *  TC - O(N)
 *  SC - O(1), for worst case O(N) space used for output array 
 */
var s = "()[{}]";
console.log(isValid(s));