//MEMBUAT OBJECT

//1.Object Literal
const mhs1 = {
    nama: 'Imdadu',
    nim: 1234,
    ip: [3.7, 3.5, 3.8, 4],
    ipk: function() {
        let total = 0;
        let ip = this.ip;
        for (let i = 0; i < ip.length; i++) {
            total += ip[i];
        }
        return total/ip.length
    }
};

console.log('mhs1', mhs1);
//problem => kalo mhsnya ada banyak ??!


//2.Function Declaration
function buatObjectMahasiswa(nama, nim, alamat) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.alamat = alamat;
    return mhs;
}

let mhs2 = buatObjectMahasiswa('Alex', 124, 'Banyumas');
let mhs3 = buatObjectMahasiswa('Udin', 125, 'Hiya');
console.log('mhs2', mhs2);
console.log('mhs3', mhs3);

//3.Constructor
function Mahasiswa(nama, nim, alamat) {
    this.nama = nama;
    this.nim = nim;
    this.alamt = alamat;
};

let mhs4 = new Mahasiswa('Xamuel', 223, 'Sini');
console.log('mhs4', mhs4);

