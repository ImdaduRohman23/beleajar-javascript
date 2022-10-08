// Perhatian! Hapus komen untuk melihat hasil program

//ARRAY (Hight Order Function/Method)

//--------- 1.Sort ----------//
// let arr = [9, 4, 8, 90, 6, 10, 2, 4, 1];
// arr.sort((a,b) => a - b);
// console.log('a -b', arr)
// arr.sort((a,b) => b - a);
// console.log('b - a', arr)

//--------- 2.Map ----------//
// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.map(item => item*2);
// console.log(arr2);

//--------- 2.Filter ----------//
// let arr = [2, 5, 7, 2, 6, 7];
// let arrFind = arr.filter((item, index) => {
//     return index>2
// });
// console.log(arrFind)


// let arr = [-2, -5, 0, 2, 6];
// let sumPlus = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         sumPlus.push(arr[i]);
//     }
// }
// console.log(sumPlus.length/arr.length);

// function plusMinus(arr) {
//     // Write your code here
//     let plus = 0;
//     let minus = 0;
//     let zero = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             plus++
//         } else if (arr[i] < 0) {
//             minus++
//         } else if (arr[i] == 0) {
//             zero++
//         }
//     }
//     return [
//         plus/arr.length,
//         minus/arr.length,
//         zero/arr.length
//     ]
// }

// console.log(plusMinus([2, -1, 0, -1, -1]))

// var a = '4';
// var b = 4;
// console.log(parseFloat(a))

// function factorial(n) {
//     let jmlh = 1;
//     for( let i = n; i > 0; i--){
//             jmlh *= i;
//         }
//     console.log(jmlh)
// }
// factorial(4);










// const nama = 'jaka tingkir';
// const b = nama.substring(0,4);
// console.log(b);

// const kui = 'aku adalah';
// console.log(kui.slice(0, 3))

// const nama2 = ['jaka | tingkir', 'abi | andi'];
// const c = nama2.indexOf('tingkir');
// console.log(c);

// const nama2 = ['jaka | tingkir', 'abi | andi'];
// const c = nama2.map(i => (i.indexOf('tingkir')))
// console.log(c)

// const c = nama2.map( i => {
//     if(i.includes('tingkir'))
//     return i.indexOf(i)})
// console.log(c)

const nama2 = ['jaka | tingkir', 'abi | tingkir'];
const cek = [];
for(let i = 0; i < nama2.length; i++) {
    if(nama2[i].includes('tingkir')){
        cek.push(nama2.indexOf(nama2[i]))
    }
}
console.log(cek)




