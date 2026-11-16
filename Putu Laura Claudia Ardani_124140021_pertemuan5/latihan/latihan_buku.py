class Buku:
    def __init__(self, judul, penulis, harga_asli, jumlah_halaman):
        self.judul = judul
        self.penulis = penulis
        self.harga_asli = harga_asli
        self.jumlah_halaman = jumlah_halaman

    def hitung_harga_diskon(self, persen):
        return self.harga_asli - (self.harga_asli * persen / 100)

    def __str__(self):
        return (f"=== KARTU BUKU ===\n"
                f"Judul   : {self.judul}\n"
                f"Penulis : {self.penulis}\n"
                f"Harga   : Rp {self.harga_asli:,.0f}\n"
                f"Halaman : {self.jumlah_halaman}")

 
    def __len__(self):
        return self.jumlah_halaman


if __name__ == "__main__":
    buku = Buku("Belajar Python", "Budi Santoso", 100000, 250)
    print(buku)
    print("Harga diskon 20% : Rp", f"{buku.hitung_harga_diskon(20):,.0f}")
    print("len(buku)        :", len(buku))
