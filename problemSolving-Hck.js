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

//---------- Diagonal Difference ----------//
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

//---------- Plus Minus ----------//
function plusMinus(arr) {
    // Write your code here
    let p=0;
    let n=0;
    let z=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            p += 1;
        } else if(arr[i] < 0) {
            n++;
        } else {
            z++
        }
    }
    let prob = [p/arr.length, n/arr.length, z/arr.length];
    for (let i = 0; i < prob.length; i++) {
        console.log(prob[i].toFixed(6))
    }
}

console.log(plusMinus([2, -2, 0, 2, 3]))

//INGAT! : .toFiced => mengatur jumlah decimal + menjadikannya string


//---------- Staircase ----------//
function staircase(n) {
    // Write your code here
    for(let i = 0; i < n; i++) {
        let res = '';
        for(let j = 0; j < n-i-1; j++){
            res += ' ';
        }
        for(let k = 0; k < i+1; k++) {
            res += '#';
        }
        console.log(res)
    }
}

//Mini-Max Sum
function miniMaxSum(arr) {
    // Write your code here
    // let max = arr[0];
    let max = 0;
    let min = (arr.reduce((a, b) => a+b));
    for(let i = 0; i < arr.length; i++){
        let jum = (arr.reduce((a, b) => a+b))-arr[i];
        if( jum > max) {
            max = jum;
        }
        if( jum < min) {
            min = jum;
        }
    }
    console.log(min, max)
}

//Birthday Cake Candles
function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort((a, b) => b - a);
    let res = 0
    for( let i = 0; i < candles.length; i++) {
        if(candles[0] == candles[i]){
            res++
        }
    }
    console.log(res)
}

//Time Conversion
function timeConversion(s) {
    // Write your code here
    let jam = '';
    if(s.includes('AM')){
        if(s.substring(0, 2) == '12'){
            jam = '00';
        } else {
            jam = s.substring(0, 2);
        }
    } else {
        if(s.substring(0, 2) == '12'){
            jam = s.substring(0, 2);
        } else {
            jam = parseInt(s.substring(0, 2))+12
        }
    }
    console.log(jam + s.substring(2, 8))
}

timeConversion('07:05:45PM')

//Grading Students
function gradingStudents(grades) {
    // Write your code here
    for(let i = 0; i < grades.length; i++) {
        if((grades[i] >= 38) && (grades[i]%5 >=3)) {
            grades[i] = grades[i] + (5 - grades[i]%5)
        }
    }
    return grades
}

//Number Line Jumps
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let h = x2 - x1;
    if( v1 > v2 && h%(v1-v2) == 0) {
        return "YES"
    } else return "NO"
}

//Apple and Orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let xA = apples.map(item => item+a).filter(item => item >= s && item <= t).length;
    let xB = oranges.map(item => item+b).filter(item => item >= s && item <= t).length;
    console.log(xA);
    console.log(xB);
}

//Breaking the Records
function breakingRecords(scores) {
    // Write your code here
    let hight = scores[0];
    let low = scores[0];
    let resH = 0;
    let resL = 0;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > hight) {
            resH++
            hight = scores[i];
        }
        else if(scores[i] < low) {
            resL++
            low = scores[i]
            
        }
    }
    return [resH, resL]
    
}

//Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let res = 0;
    for(let i = 0; i < ar.length; i++){
        for(let j = i+1; j < ar.length; j++){
            if(ar[i] + ar[j] == k || (ar[i] + ar[j])%k == 0 && i<j){
                res++
            }
        }
    }
    return res
}

//Cats and a Mouse
function catAndMouse(x, y, z) {
    if(Math.abs(y-z) > Math.abs(x-z)) return 'Cat A';
    if(Math.abs(y-z) < Math.abs(x-z)) return 'Cat B';
    if(Math.abs(y-z) === Math.abs(x-z)) return 'Mouse C';
}

//Bill Division
function bonAppetit(bill, k, b) {
    // Write your code here
    let res = (Math.abs((((bill.reduce((a,b) => a+b))-bill[k])/2)-b));
    if(res != 0){
        return console.log(res);
    } else {
        return console.log('Bon Appetit');
    }
}

//The Hurdle Race
function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height);
    if(k < max){
        return max-k
    } else return (0)
}

//Designer PDF Viewer
function designerPdfViewer(h, word) {
    // Write your code here
    let l = [];
    for(let i =0; i < word.length; i++){
        l.push(h[(word[i].charCodeAt())-97])
    }
    let max = Math.max(...l)
    return l.length*max
}

//Viral Advertising
function viralAdvertising(n) {
    // Write your code here
    let s1 = [5];
    let l1 = [2];
    for (let i = 0; i < n-1; i++) {
        s1.push(Math.floor(l1[i]*3));
        l1.push(Math.floor(s1[i+1]/2))   
    }
    return l1.reduce((a,b) => a+b)
}


//Angry Professor
function angryProfessor(k, a) {
    // Write your code here
    let masuk = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] <= 0) {
            masuk.push(a[i])
        }
    }
        
    if(masuk.length < k) {
        return 'YES'
    } else return 'NO'

}