var lengthOfLongestSubstring = function(s) {
    
    var mp = new Map();
    
    var left = 0;
    var right = 0;
    var length = 0;

    while( right < s.length){

        /**
         *  if map already has that character that means it is a repeating character
         *  if repeating update left
         *  so left will be move to the next place where that character was last seen
         *  
         */
        if( mp.has(s[right])){
            left = Math.max( mp.get(s[right]) + 1, left)
        }
        /**
         *  if character is ocurring first time simply create entry in map
         *  and update the length of string
         *  also increment right to next pointer
         */
        mp.set( s[right], right);
        length = Math.max( length, right - left + 1);
        right++; 
    }
    // return maxiumum length
    return length;
};

var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));