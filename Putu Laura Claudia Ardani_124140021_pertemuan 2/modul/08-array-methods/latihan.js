const nilaiMahasiswa = [
  { nama: 'Ayu', kelas: 'A', nilai: 85 },
  { nama: 'Bima', kelas: 'B', nilai: 72 },
  { nama: 'Citra', kelas: 'A', nilai: 90 },
  { nama: 'Doni', kelas: 'B', nilai: 60 }
];
const groupBy = (data, kunci) => data.reduce((hasil, item) => {
  const grup = item[kunci];
  (hasil[grup] ||= []).push(item);
  return hasil;
}, {});
const rataRata = data => data.reduce((total, item) => total + item.nilai, 0) / data.length;
const bersarang = [['Jarkom', 'Matdis'], ['Pemweb', ['Basis Data', 'AI']]];
const rata = nilaiMahasiswa.filter(item => item.nilai >= 70).map(item => ({ nama: item.nama, nilai: item.nilai })).reduce((hasil, item) => hasil + `${item.nama}: ${item.nilai}\n`, '');
const hasil = [`Group by kelas: ${JSON.stringify(groupBy(nilaiMahasiswa, 'kelas'), null, 2)}`, `Rata-rata nilai: ${rataRata(nilaiMahasiswa).toFixed(2)}`, `Array flat: ${JSON.stringify(bersarang.flat(2))}`, `Nilai minimal 70 (filter + map + reduce):\n${rata}`];
document.querySelector('#hasil').textContent = hasil.join('\n\n');
