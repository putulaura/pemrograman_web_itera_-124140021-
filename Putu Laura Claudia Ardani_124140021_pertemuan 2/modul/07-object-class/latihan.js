class Product {
  constructor(nama, harga) { this.nama = nama; this.harga = harga; }
  get info() { return `${this.nama}: Rp${this.harga.toLocaleString('id-ID')}`; }
  set hargaBaru(nilai) { if (nilai >= 0) this.harga = nilai; }
}
class DigitalProduct extends Product {
  constructor(nama, harga, ukuranFile) { super(nama, harga); this.ukuranFile = ukuranFile; }
}
class PhysicalProduct extends Product {
  constructor(nama, harga, berat) { super(nama, harga); this.berat = berat; }
}
const prefix = 'produk';
const data = { [`${prefix}_utama`]: 'Catatan kuliah', [`${prefix}_cadangan`]: 'Pulpen' };
const buatRingkasan = ({ nama = 'Produk baru', harga = 0 } = {}) => `${nama} seharga Rp${harga.toLocaleString('id-ID')}`;
const catatan = new DigitalProduct('Template catatan', 12000, '2 MB');
const pulpen = new PhysicalProduct('Pulpen pink', 5000, '10 gram');
catatan.hargaBaru = 15000;
document.querySelector('#hasil').textContent = [catatan.info, `Ukuran file: ${catatan.ukuranFile}`, pulpen.info, `Berat: ${pulpen.berat}`, `Computed keys: ${JSON.stringify(data)}`, buatRingkasan({ nama: 'Buku', harga: 18000 }), buatRingkasan()].join('\n');
