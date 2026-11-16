# Berkas: library.py
# Berisi class Library untuk mengelola koleksi item perpustakaan


class Library:
    """Menyimpan dan mengelola koleksi item perpustakaan."""

    def __init__(self, nama):
        self.nama = nama
        self.__koleksi = []  # private: daftar semua item

    def tambah_item(self, item):
        """Menambahkan item baru ke koleksi."""
        self.__koleksi.append(item)
        print(f"Item '{item.judul}' ditambahkan ke {self.nama}.")

    def tampilkan_tersedia(self):
        """Menampilkan daftar item yang belum dipinjam (polymorphism: get_detail)."""
        print(f"\n=== Katalog Tersedia - {self.nama} ===")
        ada = False
        for item in self.__koleksi:
            if not item.is_dipinjam:
                print(item.get_detail())
                ada = True
        if not ada:
            print("(tidak ada item tersedia)")

    def cari_judul(self, kata_kunci):
        """Mencari item berdasarkan judul (tidak peka huruf besar/kecil)."""
        hasil = [i for i in self.__koleksi if kata_kunci.lower() in i.judul.lower()]
        return hasil

    def cari_id(self, item_id):
        """Mencari satu item berdasarkan id. Mengembalikan None jika tidak ada."""
        for item in self.__koleksi:
            if item.item_id == item_id:
                return item
        return None
