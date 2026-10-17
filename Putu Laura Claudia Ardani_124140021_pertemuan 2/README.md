# Jadwal Kuliah

Website sederhana untuk mencatat jadwal kuliah dalam satu halaman. Saya memilih tema ini supaya bisa melihat nama mata kuliah, hari, jam, dan ruang tanpa harus mencatatnya terpisah.

## Fitur

- Menambah, mengedit, dan menghapus jadwal kuliah.
- Memfilter jadwal berdasarkan hari.
- Menyimpan jadwal menggunakan `localStorage`.
- Mengambil kutipan motivasi dari API menggunakan Fetch API dan `async/await`.
- Menggunakan class untuk mengatur data jadwal dan proses aplikasi.

## Screenshot

Hasil web yang telah dikerjakan

![Tampilan Jadwal Kuliah](screenshot-jadwal.png)

## Fitur ES6+ yang Digunakan

| Fitur                     | Kegunaan                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `let` dan `const`         | Menyimpan data dan nilai yang digunakan dalam program.                                                               |
| Arrow function            | Menangani event form, tombol, filter, dan proses lainnya dengan fungsi yang lebih singkat.                           |
| Template literals         | Menampilkan nama mata kuliah, hari, jam, dan ruang secara dinamis.                                                   |
| Spread operator           | Membuat data jadwal baru atau memperbarui data tanpa mengubah objek sebelumnya secara langsung.                      |
| Array methods             | Menggunakan `map()`, `filter()`, `find()`, dan `sort()` untuk mengolah jadwal.                                       |
| Class                     | `JadwalKuliah` menyimpan data setiap jadwal, sedangkan `DashboardApp` mengatur tampilan, penyimpanan, dan interaksi. |
| Async/await dan Fetch API | Mengambil kutipan motivasi dari API dan menampilkan status saat proses berlangsung.                                  |

## Latihan Praktikum

1. `01-let-const` — membandingkan `var`, `let`, dan `const`.
2. `02-conditional` — latihan `if/else` dan `switch`.
3. `03-arrow-function` — fungsi biasa, arrow function, dan implicit return.
4. `04-template-literals` — interpolasi variabel, ekspresi, dan teks multi-baris.
5. `05-destructuring` — object/array destructuring, nested object, dan `for...of`.
6. `06-spread-rest` — merge tiga objek dan statistik dengan rest parameter.
7. `07-object-class` — class `Product`, inheritance, getter/setter, computed properties, dan default parameters.
8. `08-array-methods` — `groupBy()` dengan `reduce()`, rata-rata, `flat()`, dan chaining.
9. `09-async-await` — gabungan endpoint API, retry, loading/error handling, pagination, dan debounced search.
