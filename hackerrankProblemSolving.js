//HACKERRANK PROBLEM SOLVING


//---------- Solve Me First ----------//
function solveMeFirst(a, b) {
    // Hint: Type return a+b below   
    return a+b;
}

//---------- Compare the Triplets ----------//
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < a.length; i++) {
        if( a[i] > b[i]) {
            alice++
        } else if (a[i] < b[i] ) {
            bob++
        }
    }
    return[alice, bob]
}


//---------- A Very Big Sum ----------//
function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let i =0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum
}

//Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let ltr = 0;
    let rtl = 0;
    for (let i = 0; i< arr.length; i++) {
        ltr += arr[i][i];
        rtl += arr[i][arr.length-i-1];
    }
    return Math.abs(ltr - rtl)
}