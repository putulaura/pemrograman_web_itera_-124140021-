class Kendaraan:
    def __init__(self, merek, model, tahun):
        self.merek = merek
        self.model = model
        self.tahun = tahun

    def deskripsi(self):
        return f"{self.merek} {self.model} ({self.tahun})"


class Truk(Kendaraan):
    def __init__(self, merek, model, tahun, kapasitas_maksimal_ton):
        super().__init__(merek, model, tahun)
        self.kapasitas_maksimal_ton = kapasitas_maksimal_ton
        self.muatan_saat_ini = 0

    def muat_barang(self, berat_ton):
        if berat_ton <= 0:
            print("Berat harus lebih dari 0!")
        elif self.muatan_saat_ini + berat_ton > self.kapasitas_maksimal_ton:
            print(f"Gagal: muatan {berat_ton} ton melebihi kapasitas "
                  f"({self.muatan_saat_ini}/{self.kapasitas_maksimal_ton} ton)!")
        else:
            self.muatan_saat_ini += berat_ton
            print(f"Berhasil memuat {berat_ton} ton. Muatan: {self.muatan_saat_ini} ton")

    def deskripsi(self):
        return (f"{super().deskripsi()} [Truk, Muatan: "
                f"{self.muatan_saat_ini}/{self.kapasitas_maksimal_ton} ton]")


if __name__ == "__main__":
    truk = Truk("Hino", "Dutro", 2022, 8)
    print(truk.deskripsi())
    truk.muat_barang(5)
    truk.muat_barang(4)  # melebihi kapasitas
    truk.muat_barang(3)
    print(truk.deskripsi())
