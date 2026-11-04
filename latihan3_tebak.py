angka_rahasia = 5

while True:
    tebakan = int(input("Tebak angka dari 1 sampai 10: "))

    if tebakan < angka_rahasia:
        print("Terlalu kecil!")
    elif tebakan > angka_rahasia:
        print("Terlalu besar!")
    else:
        print("Selamat, tebakan benar!")
        break
