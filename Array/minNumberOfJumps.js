// wrong code

function minJumps(arr, n) {
    //code here

    var count = 0;
    var moveTo = 0;
    var index = 0;
    var curr_pos;


    while (index + arr[index] < n - 1) {
        
        var max = 0;
        curr_pos = index;

        if (arr[curr_pos] === 0) return - 1;
        console.log(` jumps made till now ${count}`);
        for (let i = curr_pos + 1; i <= curr_pos + arr[curr_pos]; i++){
           // max = Math.max(max, arr[i]);
            if (max < i+  arr[i]) {
                max = arr[i];
                index = i;
            } 
            console.log(`max found is ${max} at index ${index}`)
        }

        moveTo = index; 
        count++;
       
        
    }
    return ++count;
}
var arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
var n = arr.length;
console.log( minJumps(arr, n))