// Hapus komen untuk melihat hasil program!

// const b = [1, 2, 3, 4];
// b.map((i) => console.log(i < 3));

// let s = 'abs';
// switch (s.charAt(0)) {
//     case('b'||'a'):
//         return('bisa ges')
//         break;

//     default: console.log('hehe')
//         break;
// }

//Day 2: Conditional Statements: Switch
// function getLetter(s) {
//     // Write your code here

//     switch(s.charAt(0)) {
//         case 'a': 
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 'A'
//             break
//         case 'b':
//         case 'c':
//         case 'd':
//         case 'f':
//         case 'g':
//             return 'B'
//             break
//         case 'h':
//         case 'j':
//         case 'k':
//         case 'l':
//         case 'm':            
//             return 'C'
//             break
//         case 'n':
//         case 'p':
//         case 'q':
//         case 'r':
//         case 's':
//         case 't':
//         case 'v':
//         case 'w':
//         case 'x':
//         case 'y':
//         case 'z': 
//             return 'D'
//             break
//     }
    
// }
// getLetter('as')

//DAY 2:CONDITIONAL STATEMENT: SWITCH
// let a = 'aikol';
// let z ='';
// let y ='';
// for(let i = 0; i < a.length; i++){
//     // console.log(a[i])
//     if(a[i] == 'a' ||a[i] == 'i' ||a[i] == 'u' ||a[i] == 'e' ||a[i] == 'o'){
//         // console.log('naise')
//         z += a[i];
//     } else y += a[i];
// }
// let n = z.concat(y);
// for(let i = 0; i < n.length; i++){
//     console.log(n[i])
// }


// let b = 'd';
// if(b == 'a' || b == 'd'){
//     console.log('yes')
// } else console.log('no')

// let color = 'b';

// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'a', 'b':
//         console.log('color is yellow')
//         break;
//     default:
//         console.log('color is . . .')
//         break;
// }

// let a = [1, 3, 5, 6, 2, 6, 6, 6, 6, 4];
// console.log(typeof a[2]) 
// let largest = [];
// for (let i = 0; i < a.length; i++){
//     if( a[[i]] > largest){
//         largest.push(a[i]);
//     }

// }
// console.log(largest)

// a.sort((a, b) => b-a
// );
// // if(a[0] == a[1] && a[0] == a[2]) {return console.log(a[3]);}
// // if(a[0] == a[1] && a[0] == a[2]) {return console.log(a[3]);}

// var largest2 = a[0];

// for(let i = a.length; i >= 0 ; i--){
//     if(largest2 == a[i] ){
//         largest2 = a[i+1];
//     }

// }
// console.log(largest2)

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// arr.sort((a, b) => b - a)
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);
// console.log(arr);


//LOOPING ARRAY OF OBJECT
// const a = [
//     {
//         nama: 'Imdadu',
//         kelas: 'Ihya'
//     },
//     {
//         nama: 'Rohman',
//         kelas: 'Ihya'
//     },
//     {
//         nama: 'Imdadu',
//         kelas: 'Ihya'
//     }
// ];

// for( let i in a) {
//     console.log(a[i].nama)
// }

// let a = 3;
// let b = 7;
// let c = a/b;
// console.log(c.toFixed(3))



// let a = '1';
// console.log(parseInt(a)+12);

// function gradingStudents(grades) {
//     // Write your code here
//     if(grades < 38) console.log(grades);
//     else {
//         if(grades[1] >= 3 && grades[1] < 6){
//             grades[1] = 5;
//         } else if (grades[1] > 7) {
//             grades[0] += 1;
//             grades[1] =0;
//         }
//     console.log(grades)
//     }
// }

// let a = 'a'
// console.log(('a'.charCodeAt())-97)

// let a = [{
//     nama: 'im',
//     no: 2
// }];

// let b = [...a, {
//     nama: 'dadu',
// }]
// console.log(b)

// const a = [
//     {
//         no: 1,
//         nama: 'imdadu'
//     },
//     {
//         no: 2,
//         nama: 'rohman'
//     },
//     {
//         no: 3,
//         nama: 'cekkk'
//     }
// ]

// a.forEach( item => {
//     if(item.no === 1) {
//         item.nama = 'nyong'
//     }
// })

// console.log(a)

// let a = [5, 2, 1, 3, 4];
// let b;
// for(let i=0; i < a.length; i++){
//     if(a[i] === i+1){
//         b.push(a[i])
//     }
// }

//https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true
// const a = 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ';
// console.log(a.split('').reverse().join(''))


//Sales by Match
function sockMerchant(n, ar) {
    // Write your code here
    let pairs = 0;
    const socks = {};
    ar.forEach(sock => {
        if(!socks[sock]) {
            socks[sock] = 0;
        } socks[sock] = socks[sock] + 1;

        if(socks[sock] % 2 === 0) {
            pairs = pairs + 1;
        }
    })

    return console.log(pairs)
}

// sockMerchant(4, [1, 2, 1, 1, 2, 1, 5])

// const ex = {};
// ex.nama = 'imdadu';
// ex[1] = 9;
// console.log(ex)
