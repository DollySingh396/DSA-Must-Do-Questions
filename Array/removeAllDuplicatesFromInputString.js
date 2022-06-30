function removeDuplicates(str){
    //code here

    var a = str.split('');
    var obj = {};
    var output = [];
    for (let i = 0; i < a.length; i++){
        if (!obj[a[i]]) {
            obj[a[i]] = 1;
            output.push(a[i]);
        }
    }
    return output.join('');
}
var Str = "geeksforgeeks";
console.log(removeDuplicates(Str));