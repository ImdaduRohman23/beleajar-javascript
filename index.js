// Perhatian! Hapus komen untuk melihat hasil program

// 1. PROGRAM PERTAMA
// console.log('Hello World!'); 

// 2. PENULISAN VARIABEL (DASAR)
// var nama; //variable declaration
// nama = 'imdadu'; //variable assigment
// console.log(nama)

// 3. DATA TYPE
// var string = 'this is string data'; //1. string
// var number = 1; //2. number
// var isTrue = true; /3. /boolean
// var isFalse = false; 
// console.log(string, number, isTrue, isFalse);

// 4. UNDEFINED VS NULL
// var nama; //4. undifined
// console.log(nama)
// var nol = null; //5. null
// console.log(nol);

//5. SCOP VARIABLE
// var global = 'global'; //global variable

// if(true) {
//     console.log('if', global);
//     var ifif = 'if'; //global variable => variabel di dalam block if
// }

// for(i = 0; i<1; i++) {
//     console.log('for', global);
//     var forfor = 'for'; //global variable => variabel di dalam block for

// }

// function test() {
//     console.log('function', global);
//     var fungsi = 'function'; //local variable => variabel di dalam fungsi
// }
// test();

// console.log(ifif)
// console.log(forfor)
// console.log(fungsi)

//KESIMPULAN = HANYA VARIABEL DI DALAM FUNGSI YANG MENGHASILKAN LOCAL VARIABLE

// 6. HOISTING
// hoisting = 'hoisting';
// console.log(hoisting);
// var hoisting;

// console.log(tambah(2, 2));
// function tambah(a, b) {
//     return a + b;
// }

// 7. VAR LET CONTS
//-----A. Scop Variable-----
//VAR => GLOBAL, kecuali saat di function

//LET DAN CONST => ketika didalam suatu block maka akan menjadi local variable, tetepi ketika di luar menjadi global
// let a = 'global';
// if(true) {
//     console.log(a);
//     let b = 'local';
// }
// console.log(b);

//-----B. Hoisting-----//
//VAR => hoisting, sebagaimana yg telah dijelaskan di atas

//LET DAN CONST => tidak hoisting
// a = 1;
// console.log(a);
// let a;

//-----C. Redleclaration-----//
//VAR => redeclatation
// var a = 1;
// var a = 2;
// console.log(a)

//LET DAN CONST => tidak redeclaration
// let a = 1;
// let a = 2;
// console.log(a)

//-----Reassignments-----//
//VAR => reasignment
// var a = 1;
// a = 2;
// console.log(a)

//LET => reassignments
// let a = 1;
// a = 4;
// console.log(a)

//CONST => tidak reassignment
// const a = 1;
// a = 4;
// console.log(a)

//8. OPERATOR
//A. Aritmatina (+, -, /, *, %)
// console.log(10 % 9);

//B. Penugasan (+=, -=, /=, *=)
// let a = 1;
// a += 2;
// console.log(a);

//C. Perbandingan (==, !=, ===)
// console.log(3 == 3);
// console.log(4 != 4);
// console.log(5 === '5');

//D. Logika (&&, ||, !)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)

