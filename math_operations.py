PI = 3.14159


def luas_persegi(sisi):
    """Menghitung luas persegi dari panjang sisi dan mengembalikan hasilnya."""
    return sisi * sisi


def keliling_persegi(sisi):
    """Menghitung keliling persegi dari panjang sisi dan mengembalikan hasilnya."""
    return 4 * sisi


def luas_persegi_panjang(panjang, lebar):
    """Menghitung luas persegi panjang dari panjang dan lebar."""
    return panjang * lebar


def keliling_persegi_panjang(panjang, lebar):
    """Menghitung keliling persegi panjang dari panjang dan lebar."""
    return 2 * (panjang + lebar)


def luas_lingkaran(jari_jari):
    """Menghitung luas lingkaran dari jari-jari."""
    return PI * jari_jari * jari_jari


def keliling_lingkaran(jari_jari):
    """Menghitung keliling lingkaran dari jari-jari."""
    return 2 * PI * jari_jari


def celcius_ke_fahrenheit(celcius):
    """Mengubah suhu Celcius menjadi Fahrenheit."""
    return (celcius * 9 / 5) + 32


def celcius_ke_kelvin(celcius):
    """Mengubah suhu Celcius menjadi Kelvin."""
    return celcius + 273.15
