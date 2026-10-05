// Data keranjang
let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
let diskon = 0;

// Menampilkan tanggal hari ini
function tampilkanTanggal() {
  let sekarang = new Date();

  let tanggal = String(sekarang.getDate()).padStart(2, "0");
  let bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
  let tahun = sekarang.getFullYear();

  let hasilTanggal = tanggal + "/" + bulan + "/" + tahun;

  document.getElementById("tanggalSekarang").textContent = hasilTanggal;
  document.getElementById("tanggalStruk").textContent =
    hasilTanggal + " • No. 0001";
}

// Mengubah angka menjadi Rupiah
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Menyimpan keranjang ke localStorage
function simpanKeranjang() {
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
}

// Menampilkan semua barang ke tabel
function tampilkanKeranjang() {
  let tabel = document.getElementById("tabelBarang");
  let kosong = document.getElementById("keranjangKosong");

  tabel.innerHTML = "";

  if (keranjang.length === 0) {
    kosong.style.display = "block";
  } else {
    kosong.style.display = "none";
  }

  for (let i = 0; i < keranjang.length; i++) {
    let barang = keranjang[i];

    let subtotal = barang.harga * barang.qty;

    let baris = document.createElement("tr");

    baris.innerHTML = `
            <td>${i + 1}</td>
            <td>${barang.nama}</td>
            <td>${formatRupiah(barang.harga)}</td>
            <td>${barang.qty}</td>
            <td>${formatRupiah(subtotal)}</td>
            <td>
                <button class="btn-hapus" onclick="hapusBarang(${i})">Hapus</button>
            </td>
        `;

    tabel.appendChild(baris);
  }

  document.getElementById("jumlahItem").textContent =
    keranjang.length + " ITEM";

  hitungTotal();
}

// Menambahkan barang ke keranjang
function tambahBarang() {
  let nama = document.getElementById("namaBarang").value.trim();
  let harga = Number(document.getElementById("hargaBarang").value);
  let qty = Number(document.getElementById("qtyBarang").value);

  let errorNama = document.getElementById("errorNama");
  let errorHarga = document.getElementById("errorHarga");
  let errorQty = document.getElementById("errorQty");

  errorNama.textContent = "";
  errorHarga.textContent = "";
  errorQty.textContent = "";

  let dataValid = true;

  if (nama.length < 3) {
    errorNama.textContent = "Nama barang minimal 3 karakter.";
    dataValid = false;
  }

  if (harga < 500 || isNaN(harga)) {
    errorHarga.textContent = "Harga minimal Rp 500.";
    dataValid = false;
  }

  if (qty < 1 || !Number.isInteger(qty)) {
    errorQty.textContent = "Qty harus angka bulat minimal 1.";
    dataValid = false;
  }

  if (dataValid === false) {
    return;
  }

  let barangBaru = {
    nama: nama,
    harga: harga,
    qty: qty,
  };

  keranjang.push(barangBaru);

  simpanKeranjang();
  tampilkanKeranjang();

  // Form dikosongkan setelah berhasil
  document.getElementById("formBarang").reset();
}

// Menghapus satu barang
function hapusBarang(index) {
  keranjang.splice(index, 1);

  simpanKeranjang();
  tampilkanKeranjang();

  // Uang bayar dikosongkan karena total berubah
  document.getElementById("uangBayar").value = "";
  hitungKembalian();
}

// Menghitung subtotal, total dan diskon
function hitungTotal() {
  let subtotal = 0;
  let totalQty = 0;

  for (let i = 0; i < keranjang.length; i++) {
    subtotal += keranjang[i].harga * keranjang[i].qty;
    totalQty += keranjang[i].qty;
  }

  let kodePromo = document
    .getElementById("kodePromo")
    .value.trim()
    .toUpperCase();

  // Diskon otomatis jika belanja minimal 50 ribu
  if (subtotal >= 50000) {
    diskon = subtotal * 0.1;
  }
  // Atau bisa menggunakan kode promo HEMAT10
  else if (kodePromo === "ITERA123" && subtotal > 0) {
    diskon = subtotal * 0.1;
  } else {
    diskon = 0;
  }

  let totalAkhir = subtotal - diskon;

  document.getElementById("totalQty").textContent = totalQty + " pcs";
  document.getElementById("subtotalBelanja").textContent =
    formatRupiah(subtotal);
  document.getElementById("nominalDiskon").textContent =
    "- " + formatRupiah(diskon);
  document.getElementById("totalBayar").textContent = formatRupiah(totalAkhir);

  hitungKembalian();
}

// Menghitung uang kembalian
function hitungKembalian() {
  let subtotal = 0;

  for (let i = 0; i < keranjang.length; i++) {
    subtotal += keranjang[i].harga * keranjang[i].qty;
  }

  let totalAkhir = subtotal - diskon;
  let uangBayar = Number(document.getElementById("uangBayar").value);

  let hasilKembalian = document.getElementById("hasilKembalian");
  let pesanBayar = document.getElementById("pesanBayar");

  pesanBayar.textContent = "";

  if (!uangBayar || uangBayar <= 0) {
    hasilKembalian.textContent = "Rp 0";
    return;
  }

  if (uangBayar < totalAkhir) {
    let kurang = totalAkhir - uangBayar;

    hasilKembalian.textContent = "Rp 0";
    pesanBayar.textContent =
      "Uang belum mencukupi. Kurang " + formatRupiah(kurang);
  } else {
    let kembalian = uangBayar - totalAkhir;
    hasilKembalian.textContent = formatRupiah(kembalian);
  }
}

// Tombol pilihan hemat
function isiCepat(nama, harga) {
  document.getElementById("namaBarang").value = nama;
  document.getElementById("hargaBarang").value = harga;
  document.getElementById("qtyBarang").value = 1;
}

// Mengosongkan transaksi
function transaksiBaru() {
  let yakin = confirm("Apakah kamu yakin ingin mengosongkan transaksi?");

  if (yakin) {
    keranjang = [];
    diskon = 0;

    localStorage.removeItem("keranjang");

    document.getElementById("formBarang").reset();
    document.getElementById("kodePromo").value = "";
    document.getElementById("uangBayar").value = "";

    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorHarga").textContent = "";
    document.getElementById("errorQty").textContent = "";

    tampilkanKeranjang();
  }
}

// Saat  disubmit
document
  .getElementById("formBarang")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    tambahBarang();
  });

// uang bayar diketik
document.getElementById("uangBayar").addEventListener("input", function () {
  hitungKembalian();
});

// tombol promo
document.getElementById("btnPromo").addEventListener("click", function () {
  let kode = document.getElementById("kodePromo").value.trim().toUpperCase();

  if (kode === "ITERA123") {
    hitungTotal();

    if (keranjang.length > 0) {
      alert("Kode promo ITERA123 berhasil digunakan.");
    }
  } else if (kode !== "") {
    alert("Kode promo tidak ditemukan.");
    hitungTotal();
  } else {
    hitungTotal();
  }
});

//  kode promo berubah, total juga dihitung ulang
document.getElementById("kodePromo").addEventListener("input", function () {
  hitungTotal();
});

// Tombol transaksi baru
document.getElementById("btnReset").addEventListener("click", function () {
  transaksiBaru();
});

// saat halaman pertama kali dibuka
tampilkanTanggal();
tampilkanKeranjang();
