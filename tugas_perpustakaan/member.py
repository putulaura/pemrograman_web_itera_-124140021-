


class Member:
    """Anggota perpustakaan yang bisa meminjam dan mengembalikan item."""

    def __init__(self, member_id, nama):
        self.member_id = member_id
        self.nama = nama
        self.__daftar_pinjam = []  # private: item yang sedang dipinjam

    def pinjam_item(self, item):
        """Meminjam item jika masih tersedia."""
        if item.pinjam():
            self.__daftar_pinjam.append(item)
            print(f"{self.nama} berhasil meminjam '{item.judul}'.")

    def kembalikan_item(self, item, hari_telat=0):
        """Mengembalikan item dan menghitung denda bila terlambat."""
        if item in self.__daftar_pinjam:
            self.__daftar_pinjam.remove(item)
            item.kembalikan()
            denda = item.hitung_denda(hari_telat)
            print(f"{self.nama} mengembalikan '{item.judul}'. Denda: Rp {denda:,}")

    def lihat_pinjaman(self):
        """Menampilkan item yang sedang dipinjam anggota."""
        print(f"Pinjaman {self.nama}:")
        if not self.__daftar_pinjam:
            print("  (tidak ada)")
        for item in self.__daftar_pinjam:
            print("  -", item.judul)
