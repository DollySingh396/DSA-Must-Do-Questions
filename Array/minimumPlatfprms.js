function findPlatform(arr, dep, n) {
    //your code here
    
    // initial platform count
    var count = 1;

    var j = 0;
    // sort the arrival and departure arrays
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
   
    // i pointer is for all trains arriving at station
    // j pointer is to point to the earliest departure time of the train
    // if that train is departed then increment j
    // if not departed then inrease the platform count and move i to new train coming

    
    //traverse the whole arrival array
    for (let i = 1; i < n; i++) {

        // if the arrival time is before the departure of train
        // then we will need a new platform for the coming train
        // so increase the platform count
        if (arr[i] < dep[j]) {
            count++;
        }
        // if the train arrives after the departure of previous train
        // then we give the coming train this previous platform
        // so only move pointer j
        else if (arr[i] > dep[j]){
            j++
        }
    
    }
    return count;
} 

var arr = [0900, 0940, 0950, 1100, 1500, 1800]
var dep = [0910, 1200, 1120, 1130, 1900, 2000]
var n = arr.length;
console.log(findPlatform(arr, dep, n))