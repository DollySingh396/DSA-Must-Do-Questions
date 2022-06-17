function removeConsecutiveCharacter(s) {

    /**
     *  Corner cases 
     *  if length of string is 0 return empty string ''
     *  if length of string is 1 then there will be no consecutive duplicates
     *  so return the original string
     */
    if (s.length === 0) return c;
    if (s.length === 1) return '';

    /**
     *  initialising a new string with the initial charachter of string s
     */
    var c = s.charAt(0);

    // iterating the whole string 
    for (let i = 1; i < s.length; i++) {

        /**
         *  if any character at i index is same as character at i - 1 index 
         *  then do nothing 
         *  if it is not same then add the character in new string 
         */
        if (s.charAt(i) !== s.charAt(i - 1))
            c += s.charAt(i);

    }
    return c;
}

/**
 *  TC - O(N); 
 *  SC - O(1); only one variable for new string is used
 */
var s = 'aaabbcccbbaa';
console.log(removeConsecutiveCharacter(s))