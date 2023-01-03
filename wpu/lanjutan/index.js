//Arrow Function

//function deklarsi
function sapaDek(nama) {
    return `Halo ${nama}`;
};
console.log('deklarasi ==> ', sapaDek('Imdadu'))

//function ekspresi
const sapaEks = function(nama) {
    return `Oii ${nama}`;
}
console.log('ekspresi ==> ', sapaEks('Rohman'));

//Arrow function 
const sapaArr = nama => `Semangatttt ${nama}`;
console.log('arrow ==> ', sapaArr('Imdadu Rohman'));

//contoh kasus
let contoh = ['Imdadu', 'Rohman', 'akan', 'sukes'];

//for 
// let jumlahHuruf = [];
// for(let i = 0; i < contoh.length; i++) {
//     jumlahHuruf.push(contoh[i].length);
// }
// console.log(jumlahHuruf)

//function deklarasi
// let jumlahHuruf = contoh.map(function(item) {
//     return item.length
// })
// console.log(jumlahHuruf)

//arrow function
let jumlahHuruf = contoh.map(item => item.length);
console.log('arrow function ==> ', jumlahHuruf);

//membuat object => dengan menambahkan kurung ()
let bikinObject = contoh.map(item => ({item, jmlh: item.length}));
console.log(bikinObject);

// let panggil = bikinObject.map((nama) => ({...nama, cek: 'cek'}));
// console.log(panggil);

let tambahObject = [...bikinObject, {cek: 'cek'}];
console.log(tambahObject)
