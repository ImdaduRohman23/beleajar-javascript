// Hapus komen untuk melihat hasil program!

//HIGHT ORDER MRTHOD/FUNCTION

//---------- 1.sort ---------\\
// let arr = [3, 2, 4, 7 ,3, 1, 5, 8, 6, 10];
// let a = arr.sort();
// console.log('a', a);
// console.log('arr', arr); //overwrite the original array

// let buah = ['Mangga', 'Kurma', 'Kiwi', 'Nanas', 'Apel'];
// buah.sort();
// console.log('buah', buah);

// let arr2 = [2, 4, 1, 10, 20, 5, 8, 3, 40, 7, 15];
// arr2.sort((a, b) => a - b);
// console.log('arr2', arr2);

//---------- 2.find ---------\\
// let arr = [3, 2, 4, 7 ,3, 1, 5, 8, 6, 10];
// console.log('ada   |', arr.find(item => item == 3));
// console.log('tidak ada   |', arr.find(item => item == 11));

//---------- 3.map ---------\\
// let arr = [3, 2, 4, 7 ,3, 1, 5, 8, 6, 10];
// console.log(arr.map(item => item+1));
// console.log(arr); //does not change the original array

//---------- 4.filter ---------\\
// let arr = [2, 4, 1, 10, 20, 5, 8, 3, 40, 7, 15];
// console.log(arr.filter(item => item < 10));
// console.log(arr); //does not change the orginal array

//---------- 5. sort + filter + map ---------\\
let arr = [2, 4, 1, 10, 20, 5, 8, 3, 40, 7, 15];
//case: dapatkan data yang kurang dari semadengan 10, urutkan dari yang paling kecil, lalu dijadikan 2x dari nilai awal!
console.log(arr.filter(i=>i<=10).sort((a, b) => a-b).map(i=>i*2));