function charachterReplacemnet(s, k){

    var m = new Map();
    var left = 0;
    var right = 0;
    var windowLength = 0;
    var countMaxOcc = 0;
    var possibleReplacements = 0;
    var maxLength = 0;

    /**
     *  Traversing the whole string
     */
    for( let i = 0; i < s.length; i++){
        /**
         *  if character is visited for the first time
         *  then simple set value in map
         *  if it is visited again then add 1
         */
        if( m.has(s[i]) ) m.set( s[i], m.get(s[i]) + 1) 
        else m.set(s[i], 1) 

        /**
         *  find the window length
         *  get the max value among all the values of map
         *  possible replacements will be window length minus maximum ocurrance count
         *  this will give the minimum replacements 
         */
        windowLength = right - left + 1;
        countMaxOcc = Math.max(...(m.values()));
        possibleReplacements = windowLength - countMaxOcc;

        /**
         *  if minimum replacement is less than guven k then we can take this window length
         *  and move to the right 
         */
        if( possibleReplacements <= k){
            maxLength = windowLength;
            right++;
        }
        /**
         *  else reduce the occurance count of left Character 
         *  and drop the value at left index and move towards the right 
         *    
         */
        else {
            m.set(s[left], m.get(s[left]) - 1);
            left++; 
            right++;
        } 
     }
     // return the max window length;
     return maxLength;
}
/**
 *  TC - O(26*N) - O(N) // 26 alphabets
 *  SC - O(26) map to store string characters, worst case N characters
 */
var s = "BAAA";
var k = 0;
console.log(charachterReplacemnet(s, k))