let invCount = 0;

function MergeSort(arr, start, end) {
    // Base Case
    if (start >= end) {
        return;
    }
    //Find the mid element
    let mid = parseInt((start + end) / 2);
    //First Half Divison
    MergeSort(arr, start, mid);
    //Second Half Division
    MergeSort(arr, mid + 1, end);
    //Merge the two half
    merge(arr, start, mid, end);
}

// ([2, 3, 5, 1, 7, 8, 4], 0, 2, 4)  -> [1, 2, 3, 5, 7]
function merge(arr, start, mid, end) {

    let m1 = mid - start + 1;
    let m2 = end - mid;
    let a1 = new Array(m1); // [2, 3, 5]
    let a2 = new Array(m2); // [1, 7]

    for (let i = 0; i < m1; i++) {
        a1[i] = arr[start + i];
    }
    for (let j = 0; j < m2; j++) {
        a2[j] = arr[mid + 1 + j];
    }
    let p1 = 0; //a1
    let p2 = 0; //a2
    let k = start; //res
    while (p1 < a1.length && p2 < a2.length) {

        if (a1[p1] <= a2[p2]) {
            // arr.push(a1[p1]);
            arr[k] = a1[p1];
            p1++;
            k++;
        } else {
            invCount += (m1 - p1);
            for (let i = p1; i < m1; i++)
                console.log(`inversion pairs are (${a1[i]} ${a2[p2]})`);
            
            arr[k] = a2[p2];
            p2++;
            k++;
        }
    }
    if (p1 === a1.length) {
        while (p2 !== a2.length) {
            arr[k] = a2[p2];
            k++;
            p2++;
        }
    }
    if (p2 === a2.length) {
        while (p1 !== a1.length) {
            arr[k] = a1[p1];
            k++;
            p1++;
        }
    }
}

/**
 *  Given an array need to find the inversion count
 *  inversion pair is one such that a[i] > a[j] and i < j
 *  
 *  Important - Inversion Count problem is an application of Merge Sort
 *  TC - O(NlogN)
 *  Sc - O(N)
 * 
 */
var arr = [-1, 6, 3, 4, 7, 4];
var l = 0;
var r = arr.length - 1;
MergeSort(arr, l, r);
console.log(invCount);