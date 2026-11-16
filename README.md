# Praktikum Pengembangan Aplikasi Web - Pertemuan 5: Python OOP

## Identitas Mahasiswa

- **Nama Lengkap** : Putu Laura Claudia Ardani
- **NIM** : 124140021
- **Kelas Praktikum** : RB

## Deskripsi Program

Program ini adalah **Sistem Manajemen Perpustakaan Sederhana** (folder `tugas_perpustakaan/`).
Alurnya: perpustakaan dibuat, item (buku dan majalah) ditambahkan, katalog ditampilkan,
item dicari berdasarkan judul atau id, lalu anggota meminjam dan mengembalikan item.

Folder `latihan/` berisi seluruh hands-on dan latihan mandiri dari modul.

### Penerapan 4 Pilar OOP

| Pilar              | Penerapan di program                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Class & Object** | `LibraryItem`, `Book`, `Magazine`, `Member`, dan `Library` adalah class. Objek dibuat di `main.py`.                                                                                                                                                           |
| **Inheritance**    | `Book` dan `Magazine` mewarisi abstract class `LibraryItem` dan memakai `super().__init__()`.                                                                                                                                                                 |
| **Encapsulation**  | `__dipinjam` (di `LibraryItem`), `__koleksi` (di `Library`), dan `__daftar_pinjam` (di `Member`) bersifat private. `_item_id`, `_judul`, `_penulis`, `_edisi` bersifat protected. `@property` dipakai pada `item_id`, `judul`, dan `is_dipinjam` (read-only). |
| **Polymorphism**   | `get_detail()` dan `hitung_denda()` diimplementasikan berbeda oleh `Book` (denda Rp 1.000/hari) dan `Magazine` (denda Rp 500/hari). `Library` cukup memanggil `item.get_detail()` tanpa mengecek tipe item.                                                   |
| **Abstraction**    | `LibraryItem(ABC)` memiliki abstract method `get_detail()` dan `hitung_denda()`, sehingga tidak bisa dibuat objeknya langsung.                                                                                                                                |

## Struktur Folder

```
Putu Laura Claudia Ardani_124140021_pertemuan5/
├── latihan/
│   ├── latihan_kasir.py
│   ├── latihan_buku.py
│   ├── latihan_truk.py
│   ├── latihan_karyawan.py
│   ├── latihan_notifikasi.py
│   └── latihan_storage.py
├── tugas_perpustakaan/
│   ├── library_item.py
│   ├── member.py
│   ├── library.py
│   └── main.py
├── README.md
└── .gitignore
```

## Panduan Menjalankan Program

Pastikan Python 3.10+ sudah terpasang, lalu jalankan di terminal:

```bash
# Tugas perpustakaan
cd tugas_perpustakaan
python main.py

# Contoh menjalankan satu latihan
cd ../latihan
python 02_class_object.py
```

## Screenshot Output

![Output main.py](screenshot/terminal1.png)
![Output main.py](screenshot/terminal2.png)
