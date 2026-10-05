// Array berisi 5 objek mahasiswa
const mahasiswa = [
  {
    nama: "Andi",
    nim: "101",
    jurusan: "Teknik Informatika",
    nilai: 85,
  },
  {
    nama: "Budi",
    nim: "102",
    jurusan: "Teknik Informatika",
    nilai: 78,
  },
  {
    nama: "Citra",
    nim: "103",
    jurusan: "Teknik Informatika",
    nilai: 92,
  },
  {
    nama: "Dina",
    nim: "104",
    jurusan: "Teknik Informatika",
    nilai: 88,
  },
  {
    nama: "Eka",
    nim: "105",
    jurusan: "Teknik Informatika",
    nilai: 70,
  },
];

// 1. Menampilkan data dalam tabel
const tabel = document.getElementById("tabel-mahasiswa");

mahasiswa.forEach(function (mhs) {
  tabel.innerHTML += `
        <tr>
            <td>${mhs.nama}</td>
            <td>${mhs.nim}</td>
            <td>${mhs.jurusan}</td>
            <td>${mhs.nilai}</td>
        </tr>
    `;
});

// 2. Mencari nilai tertinggi
const nilaiTertinggi = mahasiswa.reduce(function (tertinggi, mhs) {
  return mhs.nilai > tertinggi.nilai ? mhs : tertinggi;
});

console.log("Nilai tertinggi:");
console.log(nilaiTertinggi);

// 3. Menghitung rata-rata
const totalNilai = mahasiswa.reduce(function (total, mhs) {
  return total + mhs.nilai;
}, 0);

const rataRata = totalNilai / mahasiswa.length;

console.log("Rata-rata: " + rataRata);

// 4. Filter mahasiswa di atas rata-rata
const diAtasRataRata = mahasiswa.filter(function (mhs) {
  return mhs.nilai > rataRata;
});

console.log("Mahasiswa di atas rata-rata:");

diAtasRataRata.forEach(function (mhs) {
  console.log(mhs.nama + " - " + mhs.nilai);
});

// 5. Mengurutkan berdasarkan nama ascending
const ascending = [...mahasiswa].sort(function (a, b) {
  return a.nama.localeCompare(b.nama);
});

console.log("Urutan ascending:");

ascending.forEach(function (mhs) {
  console.log(mhs.nama);
});

// Mengurutkan descending
const descending = [...mahasiswa].sort(function (a, b) {
  return b.nama.localeCompare(a.nama);
});

console.log("Urutan descending:");

descending.forEach(function (mhs) {
  console.log(mhs.nama);
});

// Menampilkan hasil
document.getElementById("hasil").innerHTML = `
    <p>Nilai tertinggi: ${nilaiTertinggi.nama} (${nilaiTertinggi.nilai})</p>
    <p>Rata-rata nilai: ${rataRata}</p>

    <p>Mahasiswa di atas rata-rata:</p>
    <ul>
        ${diAtasRataRata
          .map(function (mhs) {
            return `<li>${mhs.nama} - ${mhs.nilai}</li>`;
          })
          .join("")}
    </ul>
`;
