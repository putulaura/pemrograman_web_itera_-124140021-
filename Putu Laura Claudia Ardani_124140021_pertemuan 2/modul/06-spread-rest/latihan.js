const identitas = { nama: 'Putu', prodi: 'Informatika' };
const kuliah = { semester: 3, kampus: 'ITERA' };
const tambahan = { semester: 4, hobi: 'membaca' };
const mahasiswa = { ...identitas, ...kuliah, ...tambahan, prodi: 'Teknik Informatika' };
const statistik = (...angka) => ({
  min: Math.min(...angka),
  max: Math.max(...angka),
  rataRata: angka.reduce((total, nilai) => total + nilai, 0) / angka.length
});
const nilai = statistik(78, 85, 90, 67, 88);
document.querySelector('#hasil').textContent = `Hasil merge 3 objek:\n${JSON.stringify(mahasiswa, null, 2)}\n\nStatistik nilai:\n${JSON.stringify(nilai, null, 2)}`;
