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
var global = 'global'; //global variable

if(true) {
    console.log('if', global);
    var ifif = 'if'; //global variable => variabel di dalam block if
}

for(i = 0; i<1; i++) {
    console.log('for', global);
    var forfor = 'for'; //global variable => variabel di dalam block for

}

function test() {
    console.log('function', global);
    var fungsi = 'function'; //local variable => variabel di dalam fungsi
}
test();

console.log(ifif)
console.log(forfor)
console.log(fungsi)

//KESIMPULAN = HANYA VARIABEL DI DALAM FUNGSI YANG MENGHASILKAN LOCAL VARIABLE