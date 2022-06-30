// wrong solution
function printFirstNegativeInteger(n, k, arr) {

    var negNo = []; 
    var array = [];
    var j = 0;
    for (let i = 0; i < k - 1; i++){
        if (arr[i] < 0) array.push(arr[i]);
    }

    console.log(` array has negative values ${array}`)

    for (let i = k - 1; i < n; i++){

        if (arr[i] < 0) array.push(arr[i]);
        console.log(` array again ${array}`)

        if(array) {
            negNo.push(array[j]);
            console.log(`  neg no ${negNo}`)
            console.log(arr[i - k + 1]);
            console.log(array[j])
            if ( array[j] === arr[i - k + 1] ) {
                console.log(` popped value is ${array.pop()}`)
                console.log(`popped value ${array}`)
            }
           
            
        }
        else {
            negNo.push(0);
            console.log(`pushed 0 ${negNo}`)
        }
    }
    return negNo;
}
var a = [12, -1, -7, 8, -15, 30, 16, 28];
var n = a.length;
var k = 3;
console.log(printFirstNegativeInteger(n, k, a));
