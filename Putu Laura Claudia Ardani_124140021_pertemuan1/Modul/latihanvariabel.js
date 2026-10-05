// 1. Data diri
const nama = "Putu Laura Claudia Ardani";
let umur = 20;
const kotaAsal = "Lampung Tengah";

console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Kota Asal: " + kotaAsal);

// 2. Pengecekan kelulusan
let nilai = 85;

if (nilai >= 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// 3. Kategori umur
let kategori;

if (umur < 12) {
  kategori = "Anak";
} else if (umur <= 17) {
  kategori = "Remaja";
} else if (umur <= 59) {
  kategori = "Dewasa";
} else {
  kategori = "Lansia";
}

console.log("Kategori umur: " + kategori);

// 4. Switch case hari
let angkaHari = 3;
let hari;

switch (angkaHari) {
  case 1:
    hari = "Monday";
    break;
  case 2:
    hari = "Tuesday";
    break;
  case 3:
    hari = "Wednesday";
    break;
  case 4:
    hari = "Thursday";
    break;
  case 5:
    hari = "Friday";
    break;
  case 6:
    hari = "Saturday";
    break;
  case 7:
    hari = "Sunday";
    break;
  default:
    hari = "Hari tidak valid";
}

console.log("Hari: " + hari);

// 5. Grade dengan ternary
let nilaiGrade = 85;

let grade =
  nilaiGrade >= 90
    ? "A"
    : nilaiGrade >= 80
      ? "B"
      : nilaiGrade >= 70
        ? "C"
        : nilaiGrade >= 60
          ? "D"
          : "E";

console.log("Grade: " + grade);

// Menampilkan hasil ke HTML
document.getElementById("result").innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Umur: ${umur}</p>
    <p>Kota Asal: ${kotaAsal}</p>
    <p>Nilai: ${nilai}</p>
    <p>Status: ${nilai >= 70 ? "Lulus" : "Tidak Lulus"}</p>
    <p>Kategori Umur: ${kategori}</p>
    <p>Hari: ${hari}</p>
    <p>Grade: ${grade}</p>
`;
