function printSequence(S, array) {

    /**
     *  Initialize the output string as empty string
     */
    var numericOutput = '';

    /**
     *  iterate the whole given string 
     */
    for (let i = 0; i < S.length; i++) {

        /**
         *  if the character is a space then add 0 to the output string
         */
        if (S.charAt(i) === ' ') numericOutput += '0';
        else {
            /**
             *  for any character, first find the position of that character 
             *  in the array that we have created
             *  this can be done by subtracting the ASCII value of A from the ASCII
             *  value of that character
             *  after finiding the position 
             *  add the numeric value stored at index in the array in output string
             */
            var position = S[i].charCodeAt(0) - 'A'.charCodeAt(0);
            numericOutput += array[position];
        }

    }

    /**
     *  return the output string
     */
    return numericOutput;
}

/**
 *  given string S
 *  TC - O(N) -- traverse the whole given string
 *  SC - O(N) -- the length of the string
 */
var S = "GEEKS FOR GEEKS";
/**
 *  created an array to store the numeric value of each alphabet
 *  A - 2, B - 22, C - 222 and so on till Z
 */
var array = [
    2, 22, 222,
    3, 33, 333,
    4, 44, 444,
    5, 55, 555,
    6, 66, 666,
    7, 77, 777, 7777,
    8, 88, 888,
    9, 99, 999, 9999
]
console.log(printSequence(S, array))