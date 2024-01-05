const fs = require('fs')
fs.writeFileSync('catatan.txt', 'Nama saya Kayla Nahda Muadzah')
fs.appendFileSync('catatan.txt', ' Saya tinggal di Bekasi')

const validator = require('validator')
const ambilacatatan = require('./catatan.js')
const pesan = ambilacatatan()
console.log(pesan)
console.log(validator.isURL('https://kayla.com'))

const command = process.argv[2]
console.log(process.argv)

if (command == 'tambah') {
    console.log('Tambah Catatan')
} 

else if (command == 'hapus') {
    console.log('Hapus Catatan')
}

const yargs = require('yargs')
const catatan = require('./catatan.js')

// Kustomisasi versi yargs
yargs.version('17.7.2')

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    handler: function () {
        console.log('Sebuah catatan baru ditambahkan!')
    }
})

// Perintah 'hapus'
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    handler: function () {
        console.log('Catatan berhasil dihapus!')
    }
})

// Instruksi no.4
yargs.command({
    command: 'daftar',
    describe: 'daftar catatan',
    handler: function () {
        console.log('Daftar catatan berhasil ditampilkan!')
    }
})

// Letakkan bagian ini pada baris terakhir
console.log(yargs.argv)

yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            dedcribe: 'Isi Catatan',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function (argv) {
        // console.log('Judul: ' + argv.judul)
        // console.log('Isi: ' + argv.isi)
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

yargs.parse()