class Produk:
    # Atribut: id_produk, nama, harga, stok
    def __init__(self, id_produk, nama, harga, stok):
        self.id_produk = id_produk
        self.nama = nama
        self.harga = harga
        self.stok = stok

    def kurangi_stok(self, jumlah):
        if jumlah <= self.stok:
            self.stok -= jumlah
            return True
        return False

    def info(self):
        return f"{self.id_produk} | {self.nama} | Rp {self.harga:,} | Stok: {self.stok}"


class Keranjang:
    # Atribut: pemilik, daftar_item, tanggal
    def __init__(self, pemilik, tanggal):
        self.pemilik = pemilik
        self.daftar_item = []  # berisi pasangan (produk, jumlah)
        self.tanggal = tanggal

    def tambah_produk(self, produk, jumlah):
        if produk.kurangi_stok(jumlah):
            self.daftar_item.append((produk, jumlah))
            print(f"{jumlah}x {produk.nama} masuk keranjang.")
        else:
            print(f"Stok {produk.nama} tidak cukup!")

    def total_belanja(self):
        return sum(p.harga * jumlah for p, jumlah in self.daftar_item)


class Pengguna:
    # Atribut: nama, email, alamat
    def __init__(self, nama, email, alamat):
        self.nama = nama
        self.email = email
        self.alamat = alamat

    def buat_keranjang(self, tanggal):
        return Keranjang(self.nama, tanggal)

    def profil(self):
        return f"{self.nama} ({self.email}) - {self.alamat}"


if __name__ == "__main__":
    laptop = Produk("P01", "Laptop", 7500000, 5)
    mouse = Produk("P02", "Mouse", 150000, 10)
    user = Pengguna("Andi", "andi@mail.com", "Bandar Lampung")

    print(user.profil())
    print(laptop.info())
    print(mouse.info())

    keranjang = user.buat_keranjang("2026-11-16")
    keranjang.tambah_produk(laptop, 1)
    keranjang.tambah_produk(mouse, 2)
    keranjang.tambah_produk(mouse, 50)  # stok tidak cukup
    print(f"Total belanja: Rp {keranjang.total_belanja():,}")
