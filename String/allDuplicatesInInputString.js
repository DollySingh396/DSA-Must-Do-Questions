const duplicatesInString = (input) => {

    // creating a new object to store each character and its occurance count
    var obj = {};

    // traversing the whole string
    for(let i = 0; i < input.length; i++){
        // if object already has the character as key then increase its value by 1
        if( obj[ input[i] ] ) obj[ input[i] ] += 1;
        // if object don't have the character then initialise the character with value 1
        else obj[ input[i] ] = 1;
    };     

    // traversing the whole object
    for( let key in obj) {
        // if any object key has value greater than 1 print that character and its count
        if(obj[key] > 1) 
        console.log( `${key}, ${obj[key]}`)
    }
   
}
/**
 *  TC - O(N) --- n is string length
 *  SC - O(K) --- k is somewhere between 0 and N
 *  extra space for object
 */
var input = "geeksforgeeks";
duplicatesInString(input);