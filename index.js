// Hapus komen untuk melihat hasil program!

//ARRAY

//---------- 1.length ----------// meretrun panjang array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// console.log(arr[0]);

// for(let i = 0; i < arr.length; i++) {
//     console.log('ke-', arr[i]);
// }

//---------- 2.push ----------// menambahkan item di akhir array
// let arr = [1, 2, 3, 4, 5];
// arr.push(8); //HARUS BERDIRI SEDIRI, NGGAK BISA DIMASUKIN KE VARIABEL BARU/CLG
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//---------- 3.unshift ----------// menambahkan item di awal array
// let arr = [1, 2, 3, 4];
// console.log('arr awal', arr);
// arr.unshift(10); //HARUS BERDIRI SEDIRI, NGGAK BISA DIMASUKIN KE VARIABEL BARU/CLG
// console.log('arr unshift', arr);


//---------- 4.pop ----------// rmove/hapus item di akhir array
// let arr = [1, 2, 3, 4];
// arr.pop(); //HARUS BERDIRI SEDIRI, NGGAK BISA DIMASUKIN KE VARIABEL BARU/CLG
// console.log(arr);

//---------- 5.shift ----------// rmove/hapus item di awal array
// let arr = [1, 2, 3, 4];
// arr.shift(); //HARUS BERDIRI SEDIRI, NGGAK BISA DIMASUKIN KE VARIABEL BARU/CLG
// console.log(arr);

//---------- 6.reverse ----------// membalik array
// let arr = [1, 2, 3, 4];
// let rv = arr.reverse(); //VARIABEL BARU = BEBA
// console.log('rv', rv);
// console.log(arr); //nilai awal ikut berubah

//---------- 7.indexOf ----------// mencari index dari sebuah element pada array
// let arr = [1, 2, 'aku', 'kamu'];
// console.log(arr.indexOf('aku')); //VARIABEL BARU = BEBAS

//---------- 8.slice ----------// memotong array
// let arr = [1, 'aku', 'kamu', 4, 5, 7, 8];
// let slice = arr.slice(0, 4); //VARIABEL BARU = BEBAS
// console.log('slice:', slice);
// console.log('awal:', arr); //nilai awal tetap

//---------- 9.toString ----------// mengubah array menjadi string
// let arr = [1, 2, 3, 'oii'];
// let arrStr = arr.toString();  //VARIABEL BARU = BEBAS
// console.log(arrStr);
// console.log(arr[0].toString());
// console.log(arr); //nilai awal tidak berubah

//---------- 10.splice ----------// menambah maupun menghapus element array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(2, 0, 9); //TAMBAH => index ke-berapa, remove=0, mau ditambahin apa
// console.log('tambah', arr);
// arr.splice(4, 2);
// console.log('kurang', arr);

//---------- 10.includes ----------// mengecek apakah suatu item ada di dalam array
// let arr = [1, 2, 3, 4];
// console.log(arr.includes(2));
// console.log(arr.includes(5));


//LATIHAN
// let cari = ['aku kamu', 'cari aku', 'coba'];
// // console.log(cari.includes('aku kamu'));
// for(let i = 0; i < cari.length; i++){
//     if(cari[i].includes('aku')){
//         console.log('yes')
//     } else{
//         console.log('no')
//     }
// }


