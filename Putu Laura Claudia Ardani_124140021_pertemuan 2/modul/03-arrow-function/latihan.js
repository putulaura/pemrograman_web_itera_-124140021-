function jumlahBiasa(a, b) { return a + b; }
const jumlahArrow = (a, b) => a + b;
const kuadrat = angka => angka * angka;
const salam = () => 'Halo, semangat praktikum!';
const buatMahasiswa = (nama, semester) => ({ nama, semester });
const hasil = [
  `Fungsi biasa: ${jumlahBiasa(4, 5)}`,
  `Arrow function: ${jumlahArrow(4, 5)}`,
  `Implicit return kuadrat: ${kuadrat(4)}`,
  `Tanpa parameter: ${salam()}`,
  `Mengembalikan objek: ${JSON.stringify(buatMahasiswa('Putu', 3))}`
];
document.querySelector('#hasil').textContent = hasil.join('\n');
