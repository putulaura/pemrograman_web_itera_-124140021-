const nilai = 78;
let status;
if (nilai >= 85) status = 'A';
else if (nilai >= 70) status = 'Lulus';
else status = 'Belum lulus';
const nomorHari = 3;
let hari;
switch (nomorHari) {
  case 1: hari = 'Senin'; break;
  case 2: hari = 'Selasa'; break;
  case 3: hari = 'Rabu'; break;
  case 4: hari = 'Kamis'; break;
  case 5: hari = 'Jumat'; break;
  default: hari = 'Akhir pekan atau nomor tidak valid';
}
document.querySelector('#hasil').textContent = `Nilai: ${nilai}\nStatus: ${status}\nNomor hari: ${nomorHari}\nHari: ${hari}`;
