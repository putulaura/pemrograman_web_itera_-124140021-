from abc import ABC, abstractmethod


class FileStorage(ABC):
    @abstractmethod
    def upload_file(self, nama_file, data_bytes):
        pass

    @abstractmethod
    def download_file(self, nama_file):
        pass

class LocalDiskStorage(FileStorage):
    def __init__(self):
        self.__folder = {}

    def upload_file(self, nama_file, data_bytes):
        self.__folder[nama_file] = data_bytes
        print(f"[Local Disk] '{nama_file}' disimpan ({len(data_bytes)} bytes) di folder lokal.")

    def download_file(self, nama_file):
        if nama_file in self.__folder:
            print(f"[Local Disk] '{nama_file}' berhasil dibaca dari folder lokal.")
            return self.__folder[nama_file]
        print(f"[Local Disk] '{nama_file}' tidak ditemukan.")
        return None

class CloudStorage(FileStorage):
    def __init__(self, nama_bucket):
        self.nama_bucket = nama_bucket
        self.__bucket = {}

    def upload_file(self, nama_file, data_bytes):
        self.__bucket[nama_file] = data_bytes
        print(f"[Cloud] '{nama_file}' diunggah ke bucket '{self.nama_bucket}'.")

    def download_file(self, nama_file):
        if nama_file in self.__bucket:
            print(f"[Cloud] '{nama_file}' diunduh dari bucket '{self.nama_bucket}'.")
            return self.__bucket[nama_file]
        print(f"[Cloud] '{nama_file}' tidak ada di bucket.")
        return None


if __name__ == "__main__":
    try:
        FileStorage()
    except TypeError as err:
        print("Abstract class tidak bisa dibuat objek:", err)

    for storage in [LocalDiskStorage(), CloudStorage("paw-itera")]:
        storage.upload_file("laporan.txt", b"isi laporan praktikum")
        data = storage.download_file("laporan.txt")
        print("Isi file:", data)
        storage.download_file("tidak_ada.txt")
        print()
