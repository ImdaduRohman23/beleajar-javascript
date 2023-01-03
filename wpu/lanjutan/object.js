//Membuat object

//1. Literal 
const mhs = {
    nama: 'Imdadu',
    energi: 10,
    makan:  function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`)
    },

    olahraga: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selemat olahraga. Energi Anda ${this.energi}`)
    }
};

//2. Function Declaration
function mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`)
    };
    mahasiswa.olahraga = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selemat olahraga. Energi Anda ${this.energi}`);
    }
    return mahasiswa
};

const mhs2 = mahasiswa('Imdadu', 10);
const mhs3 = mahasiswa('Rohman',  20);

//3.Constructor
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`)
    };
    this.olahraga = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selemat olahraga. Energi Anda ${this.energi}`);
    };
};

const mhs4 = new Mahasiswa('Alex', 10);


//4. Object.create() => menghubungkan satu object dg yg lainnya
const methodMhs = {
    makan:  function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`)
    },

    olahraga: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selemat olahraga. Energi Anda ${this.energi}`)
    }
}

function mahasiswaOc(nama, energi) {
    // let mahasiswa = {};
    let mahasiswa = Object.create(methodMhs);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.makan = methodMhs.makan;
    // mahasiswa.olahraga = methodMhs.olahraga;
    // karena ketika akan tmbh method harus menyesuaikan, maka dibutuhkan otomatisasi => Object.create()
    return mahasiswa;
};

const mhs5 = mahasiswaOc('siapa hayo', 50);

//5. Prototype
function MahasiswaPro(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

MahasiswaPro.prototype.makan = function(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`);
};

MahasiswaPro.prototype.olahraga = function(jam) {
    this.energi += jam;
    console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`);
};

const mhs6 = new MahasiswaPro('mhs6', 30);

//6.Class 
class MahasiswaClass {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`);    
    }

    olahraga(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selemat makan. Energi Anda ${this.energi}`);    
    }
};

const mhs7 = new MahasiswaClass('mhs7', 40);