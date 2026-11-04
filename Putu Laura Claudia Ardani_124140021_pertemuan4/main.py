import math_operations
from math_operations import (
    luas_persegi,
    keliling_persegi,
    celcius_ke_fahrenheit,
    celcius_ke_kelvin
)

print("--- PERSEGI ---")
sisi = 5
print("Sisi:", sisi)
print("Luas:", luas_persegi(sisi))
print("Keliling:", keliling_persegi(sisi))

print("\n--- PERSEGI PANJANG ---")
panjang = 8
lebar = 4
print("Panjang:", panjang)
print("Lebar:", lebar)
print("Luas:", math_operations.luas_persegi_panjang(panjang, lebar))
print("Keliling:", math_operations.keliling_persegi_panjang(panjang, lebar))

print("\n--- LINGKARAN ---")
jari_jari = 7
print("Jari-jari:", jari_jari)
print("Luas:", math_operations.luas_lingkaran(jari_jari))
print("Keliling:", math_operations.keliling_lingkaran(jari_jari))
print("Nilai PI:", math_operations.PI)

print("\n--- KONVERSI SUHU ---")
suhu = 30
print(f"{suhu} Celcius ke Fahrenheit: {celcius_ke_fahrenheit(suhu):.2f}")
print(f"{suhu} Celcius ke Kelvin: {celcius_ke_kelvin(suhu):.2f}")
