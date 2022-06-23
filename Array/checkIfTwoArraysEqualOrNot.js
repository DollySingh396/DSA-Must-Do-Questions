// function check(A,B,N){
//     // code here

//     // object to store the count of each array element
//     // here one element can occur more than one time
//     var obj = {};

//     // traverse A to get count of all elements of A
//     for( let i = 0; i < N; i++){
//         if(obj[A[i]]) obj[A[i]] += 1;
//         else obj[A[i]] = 1;
//     }

//     // traverse B , if same element is found decrease count from object
//     // otherwise for new element initilaise with -1
//     //
//     for( let i = 0; i < N; i++){
//         if(obj[B[i]]) obj[B[i]] -= 1;
//         else obj[A[i]] = -1;
//     }

//     // checking that each key of object has 0 value
//     // if yes return 1 else 0
//     var res = Object.keys(obj).every( key => obj[key] == 0) ? 1 : 0

//     return res;

// }

function check(A,B,N){
    var temp = 0;

    for(let i = 0; i < N; i++) temp ^= A[i]

    for(let i = 0; i < N; i++) temp ^= B[i]

    return temp
    //return (temp ?  !(true) : (!false) )
}

/**
 *  TC - O(N)
 *  SC - O(N)
 */
var A = [1,2,5,4,0]
var B = [2,4,5,0,1]
var N = A.length;
console.log(check(A,B,N));