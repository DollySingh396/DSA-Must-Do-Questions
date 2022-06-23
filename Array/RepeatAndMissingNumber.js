/**
 * This question can be solved using bit manipulation XOR concept
 *  with xor it wil not cause overflow and TC - O(N) and SC - O(1)
 *  so will solve this question with xor once I complete bit manipulation theory concept
 *  Now Map is used to solve this question which take O(N) time and 
 *  Map space will be O(N) necause N array values
 */
repeatedNumber = function(A){
   
    
        let repeat = 0;
        let missing = 0;
        let numberMap = new Map();
        
        // iterate whole array
         for(let i of A)
             {
                 /**
                  *  has method of map return true or false whether the element i spresent in map or not respectively
                  *  so if element is not present then create new entry for that element and store its value as true
                  *  if the element is already present in map then it means that it is a duplicate
                  *  push the element in res
                  * 
                  * 
                  */
                 if (numberMap.has(i) == false) {
                     numberMap.set(i,true);
                 }
                 else
                 {
                  repeat = i;
                 }
             }
             
            /**
             * again iterate from 1 to array length 1 to n 
             * if map has that value then it will return true and if condition will be false
             * if element i snot present then map.has will return false 
             * then if condition will be true and push that element in res 
             */   
             for(let i = 1; i <= A.length; i++)
             {
                 /** 
                  * numberMap has 5 will give false then false == false
                  * so it will push 5 in res;
                  */
                 if (numberMap.has(i) == false) {
                    missing = i;
                 }
             }
             //console.log(numberMap);
             return [repeat, missing];
    }

    // Approach Two - Using XOR
// repeatedNumber = function(A){

//     var temp = 0;
//     for( let i = 0; i < A.length; i++){
//         temp ^= A[i];
//     }
//     console.log(`value of temp is ${temp}`);

//     for( let i = 1; i <= A.length; i++){
//         temp ^= i;
//     }
//     console.log(`value of temp is ${temp}`);

//     var rsb = (temp ^ -temp);
//     var x = 0;
//     var y = 0;
//     console.log(`value of rsb is ${rsb}`);

//     for( let i = 0; i < A.length; i++){
        
//         if( (A[i] & rsb) == 0){
//             x ^= A[i]
//         }
//         else y ^= A[i];
//     }

//     console.log(`value of x is ${x}`);
//     console.log(`value of y is ${y}`);

//     for( let i = 1; i <= A.length; i++){
//         if( (i & rsb) == 0){
//             x ^= i
//         }
//         else y ^= i;
//     }
//     console.log(`!!!!!!!!value of x is ${x}`);
//     console.log(`!!!!!!!!value of y is ${y}`);
    
//     for( let i = 0; i < A.length; i++){
        
//         if(A[i]  == x){
//             console.log(`Missing no is ${y}`);
//             console.log(`Repeating no is ${x}`);
//         }
//         else if(A[i]  == y){
//             console.log(`Missing no is ${x}`);
//             console.log(`Repeating no is ${y}`);
//         }
//     }
// }

var A = [1, 2, 2, 4]
console.log(repeatedNumber(A))


	