class Karyawan:
    UMR = 3200000 

    def __init__(self, nama, jabatan, gaji_pokok):
        self.nama = nama
        self.jabatan = jabatan
        self.__gaji_pokok = self.UMR
        self.gaji_pokok = gaji_pokok  # lewat setter agar tervalidasi

    @property
    def gaji_pokok(self):
        return self.__gaji_pokok

    @gaji_pokok.setter
    def gaji_pokok(self, nilai):
        if nilai < self.UMR:
            print(f"Gagal: gaji Rp {nilai:,} di bawah UMR (Rp {self.UMR:,})!")
        else:
            self.__gaji_pokok = nilai

    # Gaji bersih = gaji pokok dikurangi pajak
    def hitung_gaji_bersih(self, pajak_persen):
        return self.__gaji_pokok - (self.__gaji_pokok * pajak_persen / 100)


if __name__ == "__main__":
    k = Karyawan("Siti", "Programmer", 5000000)
    print(f"{k.nama} ({k.jabatan}) gaji pokok: Rp {k.gaji_pokok:,}")
    print(f"Gaji bersih (pajak 5%): Rp {k.hitung_gaji_bersih(5):,.0f}")

    k.gaji_pokok = 2000000  # ditolak
    k.gaji_pokok = 6000000  # diterima
    print(f"Gaji pokok baru: Rp {k.gaji_pokok:,}")
