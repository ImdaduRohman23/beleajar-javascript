//Algorithm Mock Test

function fizzBuzz(n) {
    // Write your code here
    for( let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else console.log(i)
    }
}

// fizzBuzz(15);

const a =[7, 8, 1, 4, 12, 6, 5, 4, 11];
// for(let i = 0; i < a.length; i++) {
//     if(a[i] == 4) {
//         console.log('Oii')
//     } else console.log(a[i])
// }

// if(a.includes(9)) {
//     console.log('jos')
// }

// const str = 'kamu aku';

// console.log(str.slice(0, 3))
// function test(n) {
//     let result = 0;
//     for(let i = 0; i < n.length; i++) {
//         result++
//     }

//     return console.log(result)
// };
// test(5)

// var s = "";

// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += "*";
//     }
//     s += "\n";
// }
// console.log(s);
// function test(n) {
//     let result = "";
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j <= i; j++) {
//             if(j === 0) result += '*'
//             if(j === 1) result += '#'
//             if(j === 2) result += '%'
//             if(j === 3) result += '*'
//             if(j === 4) result += '#'
//             if(j === 5) result += '%'
//         }
//         result += "\n"
//     }
//     return console.log(result)
// };

// test(5)


// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//       console.log(i, j)
//     }
//   }

// function test(n) {
//     let result = "";
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j <= i; j++) {
//             if(j === 0) result += '*';
//             if(j === 1) result += '#';
//             if(j === 2) result += '%';
//             if(j % 3 === 0 && j !== 0) result += '*';
//             if(j % 3 === 1 && j !== 1) result += '#';
//             if(j % 3 === 2 && j !== 2) result += '%';
//         }
//         result += "\n";
//     }
//     return console.log(result);
// }

// test(20);

let number = 761165575;
let numberString = number.toString();
let arr = numberString.split('');
let palindrom = [];
for(let i = 0; i < arr.length; i++) {
    let a = arr.filter(item => item == arr[i]);
    console.log(a)
}
// console.log(arr)
