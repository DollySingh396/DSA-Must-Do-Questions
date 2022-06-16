var isPalindrome = function(s) {
    
    /**
     *  first converting all the characters to  lowercase
     *  then if the string has anything other than a-z alphabets 
     *  or 0-9 digits then simply replace it with ''
     *  after getting the string use two pointers approach
     *  start and end index
     *  if at any point start and end index values are not same then
     *  simple return false
     *  else return true
     *  
     *  regular expression  /[^a-z0-9]/ means if the string has anything other than a-z0-9
     *  and it is global expression then replace it with ''
     *  
     *  
     */
    s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(s);

    for( let start = 0, end = s.length - 1; start <= end; start++, end--){
        if( s.charAt(start) !== s.charAt(end) ) return false;
    }
    
    return true;
};

/**
 *  TC - O(N)
 *  SC - O(1)
*/
s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));