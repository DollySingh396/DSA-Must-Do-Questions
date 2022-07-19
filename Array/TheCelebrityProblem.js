function celebrity(M, n)
{
    /**  approach one - TC O(N*N) SC - O(N)

    // storing the inn count of every person 
     inn means that this person is know by others
    var inn = new Array(n).fill(0);

    // storing out count of every person
     out means that person knows other person
    var out = new Array(n).fill(0);

    // traversing whole amtrix to store the inn and out count of each person
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
        {
            if (M[i][j] === 1) {
                inn[j]++;
                out[i]++;
            }
        }
    }

    // traverse the array again to check if there is any person whose inn count is equal to n-1 i.e 
      all person knows this person except self
      and this person don't know any other person

    for (let i = 0; i < n; i++){
        if (inn[i] === n - 1 && out[i] === 0)
            return i;
    }
    return -1;
    
    **/
    
    //***************************************************************************
    // approach two TC - O(N), SC - O(1)

    /**
     *  assuming that person 0 is the celebrity
     */
    var c = 0;

    /**
     *  traversing the whole matrix to find whether there is any person whom celebrity knows
     * 
     *  if yes then update the celebrity to that person
     *   
     *  this loop will give us the possible candidate for celebrity
     */
    for (let i = 1; i < n; i++){
        if (M[c][i] === 1)
            c = i;
    }


    /**
     *  now we will traverse the whole matrix again to find out that 
     *  is there any person who don't know the celebrity 
     *  or if celebrity knows a person
     * 
     *  if any of the above condition is true then that person is not celebrity
     */
    for (let i = 0; i < n; i++){
        if ( (i !== c) && (M[i][c] === 0 || M[c][i] === 1) )
            return -1;
    }

    return c;
}

var m = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
]
var n = m.length;
console.log(celebrity(m, n))