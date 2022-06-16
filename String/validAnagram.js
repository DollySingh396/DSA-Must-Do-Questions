var isAnagram = function(s, t) {
    
    /**
     *  if length of t is not same as s then t is definitely not an anagram of s
     */
    if( s.length !== t.length ) return false;

    const obj = {};
    /**
     *  split the string to form array of characters
     *  map each character of array to an object obj
     *  if object don't have that charachter then set its value as 1
     *  if object has that charachter then add 1 to its value
     */
    s.split('').map( c => 
        {
         if( obj[c] )  obj[c] += 1 
         else obj[c] = 1;
    })

    /**
     *  for t 
     *  split it into an array of charachters
     *  now for each character we will check object obj has that character or not
     *  if yes then decrease its count by 1
     *  if no then set its value as -1
     */
    t.split('').map( c => {
        if( obj[c] ) obj[c] -= 1;
        else obj[c] = -1
    })
	
    /**
     *  for each key of object obj 
     *  if every key has value 0 then it is anagram
     *  otherwise not
     */
	return Object.keys(obj).every(k => obj[k] === 0);
};

/**
 *  TC - O(N);
 *  SC - O(N) -- space to store array values in object
 */
var s = "anagram", t = "nagaram";
console.log(isAnagram(s, t))
