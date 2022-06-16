var isAnagram = function(s, t) {
    
    if( s.length !== t.length ) return false;

    let obj = {}

    s=s.split('');
    t=t.split('');

    console.log(s)
    console.log(t)
    
    for( let val in s){
        obj[val] ? obj[val] += 1 : obj[val] = 1
     }
        console.log(obj)
    for( let val in t){
         t.includes(obj[val]) ? obj[val] -= 1 : obj[val] = -1
        }
        console.log(obj)
        
    // for( let i = 0; i < t.length; i++)  {
    //     //if( obj.has(t.charAt(i)) )
    // }
    return true;
};


var s = "anagram", t = "nagaram";

console.log(isAnagram(s, t))
