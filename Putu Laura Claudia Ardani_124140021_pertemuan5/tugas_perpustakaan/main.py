from library_item import Book, Magazine
from library import Library
from member import Member

# 1. Buat perpustakaan dan tambahkan item
perpus = Library("Perpustakaan ITERA")
print("--- Menambahkan Item ---")
perpus.tambah_item(Book("B001", "Belajar Python", "Putu Laura"))
perpus.tambah_item(Book("B002", "Pemrograman Web", "Made Endra"))
perpus.tambah_item(Magazine("M001", "Majalah Teknologi", "November 2026"))
perpus.tambah_item(Magazine("M002", "Majalah Sains", "Oktober 2026"))

# 2. Tampilkan katalog
perpus.tampilkan_tersedia()

# 3. Cari item
print("\n--- Pencarian ---")
print("Cari judul 'python':")
for item in perpus.cari_judul("python"):
    print(" ", item.get_detail())

item = perpus.cari_id("M001")
print("Cari id 'M001':", item.get_detail() if item else "tidak ditemukan")
print("Cari id 'X999':", perpus.cari_id("X999") or "tidak ditemukan")

# 4. Status ketersediaan (peminjaman)
print("\n--- Peminjaman ---")
anggota = Member("A01", "Andi")
anggota.pinjam_item(perpus.cari_id("B001"))
anggota.pinjam_item(perpus.cari_id("B001"))  # sudah dipinjam -> ditolak
anggota.pinjam_item(perpus.cari_id("M001"))
anggota.lihat_pinjaman()
perpus.tampilkan_tersedia()

# 5. Pengembalian dan denda
print("\n--- Pengembalian ---")
anggota.kembalikan_item(perpus.cari_id("B001"), hari_telat=3)
anggota.kembalikan_item(perpus.cari_id("M001"), hari_telat=3)
perpus.tampilkan_tersedia()

# 6. Bukti encapsulation
print("\n--- Bukti Encapsulation ---")
buku = perpus.cari_id("B002")
try:
    buku.is_dipinjam = True  # property tanpa setter
except AttributeError:
    print("is_dipinjam tidak bisa diubah langsung (read-only property).")
