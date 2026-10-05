// 1. Tabel perkalian 1 sampai 10
let angka = 7;

console.log("Tabel Perkalian " + angka);

for (let i = 1; i <= 10; i++) {
  console.log(angka + " x " + i + " = " + angka * i);
}

// 2. Fungsi faktorial
function faktorial(n) {
  let hasil = 1;

  for (let i = 1; i <= n; i++) {
    hasil = hasil * i;
  }

  return hasil;
}

console.log("Faktorial 5 = " + faktorial(5));

// 3. Fungsi bilangan prima
function cekPrima(angka) {
  if (angka < 2) {
    return false;
  }

  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

let angkaCek = 17;

console.log(
  angkaCek +
    (cekPrima(angkaCek) ? " adalah bilangan prima" : " bukan bilangan prima"),
);

// 4. Kalkulator BMI
function hitungBMI(berat, tinggi) {
  let tinggiMeter = tinggi / 100;
  return berat / (tinggiMeter * tinggiMeter);
}

let berat = 60;
let tinggi = 170;

let bmi = hitungBMI(berat, tinggi);

console.log("BMI: " + bmi.toFixed(2));

// 5. FizzBuzz
console.log("FizzBuzz:");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Tampilkan beberapa hasil ke HTML
document.getElementById("result").innerHTML = `
    <p>Angka perkalian: ${angka}</p>
    <p>Faktorial 5: ${faktorial(5)}</p>
    <p>Bilangan ${angkaCek}: ${cekPrima(angkaCek) ? "Prima" : "Bukan Prima"}</p>
    <p>BMI: ${bmi.toFixed(2)}</p>
    <p>FizzBuzz dapat dilihat di Console (F12).</p>
`;
