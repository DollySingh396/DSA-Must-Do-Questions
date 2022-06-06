function reverseWord(str){
        
    var str =  str.split('');
    var start = 0; 
    var end = str.length - 1;

    // one comparison
    if( str.length == 0 ) {
        return "";
    }
    // one comparison
    if( str.length == 1 ){
        return str.toString();
    }
    // will run till start becomes greater than end
    // so it will run ceil of n/2 times
        while( start <= end ){
            [ str[end], str[start] ] = [ str[start], str[end] ]
              start++;
              end--;
      }
    str = str.join('');
    return str;
}

// tc will be O(1) + O(1) + O(N/2) => O(N)
console.log(reverseWord("Geeks"));