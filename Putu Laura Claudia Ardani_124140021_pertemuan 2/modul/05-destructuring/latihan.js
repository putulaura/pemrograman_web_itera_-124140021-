const mahasiswa = {
  nama: 'Putu',
  prodi: 'Teknik Informatika',
  alamat: { kota: 'Bandar Lampung', detail: { kecamatan: 'Rajabasa', kodePos: '35144' } }
};
const { nama, prodi, alamat: { kota, detail: { kecamatan, kodePos } } } = mahasiswa;
const warna = ['pink', 'putih', 'hitam', 'abu-abu'];
const [warnaUtama, warnaKedua, ...warnaLain] = warna;
const daftarMatkul = [
  { nama: 'Jarkom', hari: 'Senin' },
  { nama: 'Pemrograman Web', hari: 'Rabu' },
  { nama: 'Matdis', hari: 'Kamis' }
];
const hasil = [`Nama: ${nama}`, `Prodi: ${prodi}`, `Alamat: ${kota}, ${kecamatan} (${kodePos})`, `Warna: ${warnaUtama}, ${warnaKedua}; sisanya ${warnaLain.join(', ')}`, 'Jadwal:'];
for (const { nama: matkul, hari } of daftarMatkul) hasil.push(`- ${matkul}: ${hari}`);
document.querySelector('#hasil').textContent = hasil.join('\n');
