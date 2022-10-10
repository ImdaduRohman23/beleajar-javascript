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

// function getLetter(s) {
//     // Write your code here
//     switch(s.charAt()) {
//         case ('a' || 'e' || 'i' || 'o' || 'u'):
//             return console.log('A')
//         case ('b' || 'c' || 'd' || 'f' || 'g'):
//             return 'B'
//         case ('h' || 'j' || 'k' || 'l' || 'm'):
//             return 'C'
//         case ('n' || 'p' || 'q' || 'r' || 's'|| 't' || 'v' || 'w' || 'x' || 'y' || 'z'): 
//             return 'D'
//     }
    
// }
// getLetter('us')

//DAY 2:CONDITIONAL STATEMENT: SWITCH
let a = 'aikol';
let z ='';
let y ='';
for(let i = 0; i < a.length; i++){
    // console.log(a[i])
    if(a[i] == 'a' ||a[i] == 'i' ||a[i] == 'u' ||a[i] == 'e' ||a[i] == 'o'){
        // console.log('naise')
        z += a[i];
    } else y += a[i];
}
let n = z.concat(y);
for(let i = 0; i < n.length; i++){
    console.log(n[i])
}


// console.log(a[0])
// let b = 2;
// if(b == 1 || b == 2){
//     console.log('yes')
// } else console.log('no')

// let z = '';
// z= 'a';
// z = z.concat('b')
// console.log(z)

