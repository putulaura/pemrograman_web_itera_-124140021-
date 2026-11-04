def validasi_password(password):
    """
    Memeriksa password.
    Parameter: password berupa teks.
    Return: True jika minimal 8 karakter dan memiliki angka.
    """
    ada_angka = False

    for karakter in password:
        if karakter.isdigit():
            ada_angka = True

    return len(password) >= 8 and ada_angka


contoh_password = ["laura123", "informatika", "abcdef", "12345678"]

for password in contoh_password:
    if validasi_password(password):
        print(password, "-> Password valid")
    else:
        print(password, "-> Password tidak valid")
