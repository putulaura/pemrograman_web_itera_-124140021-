let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
let diskon = 0;

function tampilkanTanggal() {
  let sekarang = new Date();
  let tanggal = String(sekarang.getDate()).padStart(2, "0");
  let bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
  let tahun = sekarang.getFullYear();

  let hasilTanggal = tanggal + "/" + bulan + "/" + tahun;

  let elTanggal = document.getElementById("tanggalSekarang");
  let elStruk = document.getElementById("tanggalStruk");

  if (elTanggal) elTanggal.textContent = hasilTanggal;
  if (elStruk) elStruk.textContent = hasilTanggal + " • No. 0001";
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function simpanKeranjang() {
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
}

function tampilkanKeranjang() {
  let tabel = document.getElementById("tabelKeranjang");
  if (!tabel) return;

  tabel.innerHTML = "";

  if (keranjang.length === 0) {
    tabel.innerHTML = `<tr><td colspan="6" class="kosong">Belum ada barang di keranjang.</td></tr>`;
  } else {
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
            <button type="button" class="btn-hapus" onclick="hapusBarang(${i})">Hapus</button>
        </td>
      `;
      tabel.appendChild(baris);
    }
  }

  let totalItemText = document.getElementById("totalItemText");
  if (totalItemText) totalItemText.textContent = keranjang.length + " ITEM";

  hitungTotal();
}

function tambahBarang() {
  let namaInput = document.getElementById("namaBarang");
  let hargaInput = document.getElementById("hargaBarang");
  let qtyInput = document.getElementById("jumlahBarang");

  let nama = namaInput ? namaInput.value.trim() : "";
  let harga = hargaInput ? Number(hargaInput.value) : 0;
  let qty = qtyInput ? Number(qtyInput.value) : 1;

  let errorNama = document.getElementById("errNama");
  let errorHarga = document.getElementById("errHarga");
  let errorQty = document.getElementById("errJumlah");

  if (errorNama) errorNama.textContent = "";
  if (errorHarga) errorHarga.textContent = "";
  if (errorQty) errorQty.textContent = "";

  let dataValid = true;

  if (nama.length < 3) {
    if (errorNama) errorNama.textContent = "Nama barang minimal 3 karakter.";
    dataValid = false;
  }

  if (harga < 500 || isNaN(harga)) {
    if (errorHarga) errorHarga.textContent = "Harga minimal Rp 500.";
    dataValid = false;
  }

  if (qty < 1 || !Number.isInteger(qty)) {
    if (errorQty) errorQty.textContent = "Jumlah harus angka bulat minimal 1.";
    dataValid = false;
  }

  if (!dataValid) return;

  keranjang.push({ nama, harga, qty });

  simpanKeranjang();
  tampilkanKeranjang();

  let form = document.getElementById("formBarang");
  if (form) form.reset();
  if (qtyInput) qtyInput.value = 1;
}

function hapusBarang(index) {
  keranjang.splice(index, 1);
  simpanKeranjang();
  tampilkanKeranjang();

  let uangBayar = document.getElementById("uangBayar");
  if (uangBayar) uangBayar.value = "";
  hitungKembalian();
}

function hitungTotal() {
  let subtotal = 0;
  let totalQty = 0;

  for (let i = 0; i < keranjang.length; i++) {
    subtotal += keranjang[i].harga * keranjang[i].qty;
    totalQty += keranjang[i].qty;
  }

  let kodeVoucherEl = document.getElementById("kodeVoucher");
  let kodePromo = kodeVoucherEl ? kodeVoucherEl.value.trim().toUpperCase() : "";

  if (subtotal >= 50000) {
    diskon = subtotal * 0.1;
  } else if (kodePromo === "ITERA123" && subtotal > 0) {
    diskon = subtotal * 0.1;
  } else {
    diskon = 0;
  }

  let totalAkhir = subtotal - diskon;

  let elJumlahItem = document.getElementById("strukJumlahItem");
  let elSubtotal = document.getElementById("strukSubtotal");
  let elDiskon = document.getElementById("strukDiskon");
  let elTotal = document.getElementById("strukTotal");

  if (elJumlahItem) elJumlahItem.textContent = totalQty + " pcs";
  if (elSubtotal) elSubtotal.textContent = formatRupiah(subtotal);
  if (elDiskon) elDiskon.textContent = "- " + formatRupiah(diskon);
  if (elTotal) elTotal.textContent = formatRupiah(totalAkhir);

  hitungKembalian();
}

function hitungKembalian() {
  let subtotal = 0;
  for (let i = 0; i < keranjang.length; i++) {
    subtotal += keranjang[i].harga * keranjang[i].qty;
  }

  let totalAkhir = subtotal - diskon;
  let uangInput = document.getElementById("uangBayar");
  let uangBayar = uangInput ? Number(uangInput.value) : 0;

  let elKembalian = document.getElementById("strukKembalian");
  let elPesan = document.getElementById("pesanBayar");

  if (elPesan) elPesan.textContent = "";

  if (!uangBayar || uangBayar <= 0) {
    if (elKembalian) elKembalian.textContent = "Rp 0";
    return;
  }

  if (uangBayar < totalAkhir) {
    let kurang = totalAkhir - uangBayar;
    if (elKembalian) elKembalian.textContent = "Rp 0";
    if (elPesan) elPesan.textContent = "Uang kurang " + formatRupiah(kurang);
  } else {
    let kembalian = uangBayar - totalAkhir;
    if (elKembalian) elKembalian.textContent = formatRupiah(kembalian);
  }
}

function pilihCepat(nama, harga) {
  let namaInput = document.getElementById("namaBarang");
  let hargaInput = document.getElementById("hargaBarang");
  let qtyInput = document.getElementById("jumlahBarang");

  if (namaInput) namaInput.value = nama;
  if (hargaInput) hargaInput.value = harga;
  if (qtyInput) qtyInput.value = 1;
}

function transaksiBaru() {
  let yakin = confirm("Apakah kamu yakin ingin mengosongkan transaksi?");
  if (yakin) {
    keranjang = [];
    diskon = 0;
    localStorage.removeItem("keranjang");

    let form = document.getElementById("formBarang");
    let voucher = document.getElementById("kodeVoucher");
    let bayar = document.getElementById("uangBayar");

    if (form) form.reset();
    if (voucher) voucher.value = "";
    if (bayar) bayar.value = "";

    tampilkanKeranjang();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let formBarang = document.getElementById("formBarang");
  if (formBarang) {
    formBarang.addEventListener("submit", function (e) {
      e.preventDefault();
      tambahBarang();
    });
  }

  let uangBayar = document.getElementById("uangBayar");
  if (uangBayar) {
    uangBayar.addEventListener("input", hitungKembalian);
  }

  let btnVoucher = document.getElementById("btnVoucher");
  if (btnVoucher) {
    btnVoucher.addEventListener("click", function () {
      let kodeEl = document.getElementById("kodeVoucher");
      let kode = kodeEl ? kodeEl.value.trim().toUpperCase() : "";

      if (kode === "ITERA123") {
        hitungTotal();
        if (keranjang.length > 0) alert("Kode promo ITERA123 berhasil digunakan!");
      } else if (kode !== "") {
        alert("Kode promo tidak valid.");
        hitungTotal();
      } else {
        hitungTotal();
      }
    });
  }

  let kodeVoucher = document.getElementById("kodeVoucher");
  if (kodeVoucher) {
    kodeVoucher.addEventListener("input", hitungTotal);
  }

  let btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", transaksiBaru);
  }

  tampilkanTanggal();
  tampilkanKeranjang();
});
