// const ambilacatatan = function () {
//     return 'Ini catatan Kayla Nahda'
// }
// module.exports = ambilacatatan

const fs = require('fs')

const ambilacatatan = function() {
    return 'ini catatan Kayla Nahda Muadzah'
}

const tambahCatatan = function(judul, isi) {
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function(note) {
        return note.title == judul
    }) 

    if (catatanGanda.length === 0 ) {
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan)
        console.log('Catatan baru ditambahkan!')
    } else {
        console.log('Judul catatan telah dipakai!')
    }
}

const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch 
{}}

