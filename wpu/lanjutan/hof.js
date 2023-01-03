//High Order Function

//dasar
function sapa(nama, waktu) { //this is high order function 
    console.log(`halo ${nama}`);
    waktu();
};

function waktu() { //this is callback
    console.log('selamat malam banget');
};

sapa('Imdadu', waktu);

//filter
const arr = [1, 4, 2, 7, 5, 4, 9, 11, 4, 14, 3, 8];
const arr5up = arr.filter(function(a) {
    return a > 5
});
const arrGenap = arr.filter(a => a%2 === 0);
console.log('filter1', arr5up);
console.log('filter2', arrGenap);

//map
const arr2 = arr.map(a => a*2);
console.log('map', arr2)

//reduce
const arrJmlh = arr.reduce((a, b) => a+b);
console.log('reduce', arrJmlh);

//chaining
//kasus => array dipilih yang kurang dari 8, lalu di kali 5, dan dijumlahkan
const arrChain = arr.filter(a => a < 8).map(a => a*5).reduce((a, b) => a+b);
console.log('chaining', arrChain);