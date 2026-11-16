class NotifikasiEmail:
    def kirim(self, pesan, penerima):
        print(f"[EMAIL] Ke {penerima}: {pesan}")


class NotifikasiSMS:
    def kirim(self, pesan, penerima):
        print(f"[SMS] Ke {penerima}: {pesan}")


class NotifikasiWhatsApp:
    def kirim(self, pesan, penerima):
        print(f"[WhatsApp] Ke {penerima}: {pesan}")


def broadcast_pengumuman(daftar_channel, pesan, penerima="Semua Mahasiswa"):
    print("=== BROADCAST PENGUMUMAN ===")
    for channel in daftar_channel:
        channel.kirim(pesan, penerima)


if __name__ == "__main__":
    channel = [NotifikasiEmail(), NotifikasiSMS(), NotifikasiWhatsApp()]
    broadcast_pengumuman(channel, "Praktikum hari ini dipindah ke Lab 2!")
