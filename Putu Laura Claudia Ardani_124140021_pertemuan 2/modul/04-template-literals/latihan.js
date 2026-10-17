const mataKuliah = 'Pemrograman Web';
const jam = '09.00';
const durasi = 2;
const caraLama = 'Hari ini ada ' + mataKuliah + ' jam ' + jam + '.';
const caraBaru = `Hari ini ada ${mataKuliah} jam ${jam}.`;
const detail = `Jadwal kuliah
Mata kuliah: ${mataKuliah}
Jam: ${jam}
Selesai sekitar: ${Number(jam.slice(0, 2)) + durasi}.00`;
document.querySelector('#hasil').textContent = `${caraLama}\n${caraBaru}\n\n${detail}`;
