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
function getLetter(s) {
    // Write your code here

    switch(s.charAt(0)) {
        case 'a': 
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A'
            break
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B'
            break
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':            
            return 'C'
            break
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z': 
            return 'D'
            break
    }
    
}
getLetter('as')

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
