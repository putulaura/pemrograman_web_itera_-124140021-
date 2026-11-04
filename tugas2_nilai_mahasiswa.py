mahasiswa = [
    {"nama": "Laura", "nim": "124140021", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Putu", "nim": "124140022", "nilai_uts": 78, "nilai_uas": 82, "nilai_tugas": 85},
    {"nama": "Claudia", "nim": "124140023", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 75},
    {"nama": "Ardani", "nim": "124140024", "nilai_uts": 92, "nilai_uas": 95, "nilai_tugas": 90},
    {"nama": "Made", "nim": "124140025", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58}
]

for data in mahasiswa:
    nilai_akhir = (
        0.30 * data["nilai_uts"]
        + 0.40 * data["nilai_uas"]
        + 0.30 * data["nilai_tugas"]
    )
    data["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        data["grade"] = "A"
    elif nilai_akhir >= 70:
        data["grade"] = "B"
    elif nilai_akhir >= 60:
        data["grade"] = "C"
    elif nilai_akhir >= 50:
        data["grade"] = "D"
    else:
        data["grade"] = "E"

print("=" * 75)
print(f"{'Nama':<12}{'NIM':<15}{'Nilai Akhir':<15}{'Grade':<10}")
print("=" * 75)

for data in mahasiswa:
    print(
        f"{data['nama']:<12}"
        f"{data['nim']:<15}"
        f"{data['nilai_akhir']:<15.2f}"
        f"{data['grade']:<10}"
    )

nilai_tertinggi = max(mahasiswa, key=lambda data: data["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda data: data["nilai_akhir"])

print("=" * 75)
print(
    f"Nilai tertinggi: {nilai_tertinggi['nama']} "
    f"({nilai_tertinggi['nilai_akhir']:.2f})"
)
print(
    f"Nilai terendah : {nilai_terendah['nama']} "
    f"({nilai_terendah['nilai_akhir']:.2f})"
)
