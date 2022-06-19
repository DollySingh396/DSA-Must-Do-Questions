function findTheSurvivor(n){

    var i = 1;
    while( i * 2 <= n){
         i *= 2;
    }
    var l = n - i;
    return 2*l + 1;

}

var n = 12;
console.log(`The survivor is ${findTheSurvivor(n)}th Person `)