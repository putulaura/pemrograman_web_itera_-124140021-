const hasil = [];
var namaLama = 'awal';
{
  var namaLama = 'berubah di dalam blok';
  let namaBaru = 'khusus di dalam blok';
  hasil.push(`let di dalam blok: ${namaBaru}`);
}
let semester = 2;
semester = 3;
const mahasiswa = { nama: 'Putu', semester: 2 };
mahasiswa.semester = 3;
hasil.unshift(`var setelah blok: ${namaLama}`);
hasil.push(`let bisa diubah: semester ${semester}`);
hasil.push(`properti objek const bisa diubah: ${mahasiswa.nama}, semester ${mahasiswa.semester}`);
hasil.push('Catatan: mencoba menulis ulang variabel const akan menghasilkan error.');
document.querySelector('#hasil').textContent = hasil.join('\n');
