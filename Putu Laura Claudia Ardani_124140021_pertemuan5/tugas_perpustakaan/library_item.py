from abc import ABC, abstractmethod


class LibraryItem(ABC):
    """Abstract class dasar untuk semua item di perpustakaan."""

    def __init__(self, item_id, judul):
        self._item_id = item_id    # protected: id item
        self._judul = judul        # protected: judul item
        self.__dipinjam = False    # private: status peminjaman

    @property
    def item_id(self):
        return self._item_id

    @property
    def judul(self):
        return self._judul

    @property
    def is_dipinjam(self):
        """Mengembalikan True jika item sedang dipinjam."""
        return self.__dipinjam

    def pinjam(self):
        """Mengubah status item menjadi dipinjam."""
        if self.__dipinjam:
            print(f"'{self._judul}' sedang dipinjam.")
            return False
        self.__dipinjam = True
        return True

    def kembalikan(self):
        """Mengubah status item menjadi tersedia lagi."""
        self.__dipinjam = False

    @abstractmethod
    def get_detail(self):
        """Wajib diimplementasikan subclass: detail lengkap item."""
        pass

    @abstractmethod
    def hitung_denda(self, hari_telat):
        """Wajib diimplementasikan subclass: denda keterlambatan."""
        pass


class Book(LibraryItem):
    """Buku: denda Rp 1.000 per hari."""

    def __init__(self, item_id, judul, penulis):
        super().__init__(item_id, judul)
        self._penulis = penulis

    def get_detail(self):
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"[Buku] {self.item_id} | {self.judul} | Penulis: {self._penulis} | {status}"

    def hitung_denda(self, hari_telat):
        return hari_telat * 1000


class Magazine(LibraryItem):
    """Majalah: denda Rp 500 per hari."""

    def __init__(self, item_id, judul, edisi):
        super().__init__(item_id, judul)
        self._edisi = edisi

    def get_detail(self):
        status = "Dipinjam" if self.is_dipinjam else "Tersedia"
        return f"[Majalah] {self.item_id} | {self.judul} | Edisi: {self._edisi} | {status}"

    def hitung_denda(self, hari_telat):
        return hari_telat * 500
