kontak = {
    "Laura": "081234567890",
    "Putu": "082345678901"
}

while True:
    print("\n--- KATALOG KONTAK ---")
    print("1. Tambah kontak")
    print("2. Cari kontak")
    print("3. Tampilkan semua kontak")
    print("4. Keluar")

    pilihan = input("Pilih menu: ")

    if pilihan == "1":
        nama = input("Nama kontak: ")
        nomor = input("Nomor telepon: ")
        kontak[nama] = nomor
        print("Kontak berhasil ditambahkan.")

    elif pilihan == "2":
        nama = input("Nama yang dicari: ")
        nomor = kontak.get(nama, "Kontak tidak ditemukan")
        print("Nomor telepon:", nomor)

    elif pilihan == "3":
        print("\nDaftar kontak:")
        for nama, nomor in kontak.items():
            print(nama, ":", nomor)

    elif pilihan == "4":
        print("Program selesai.")
        break

    else:
        print("Pilihan tidak tersedia.")
