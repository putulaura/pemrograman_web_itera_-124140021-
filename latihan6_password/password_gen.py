import random
import string


def buat_password_acak(panjang=8):
    """
    Membuat password acak.
    Parameter: panjang adalah jumlah karakter password.
    Return: password acak yang berisi huruf dan angka.
    """
    karakter = string.ascii_letters + string.digits
    password = ""

    for i in range(panjang):
        password += random.choice(karakter)

    return password
