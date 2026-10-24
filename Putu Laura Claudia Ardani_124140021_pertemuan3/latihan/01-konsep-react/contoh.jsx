import { useState } from "react";

export default function ContohKonsep() {
  const [angka, setAngka] = useState(0);
  return (
    <section>
      <h2>Latihan React pertama</h2>
      <p>Jumlah klik: {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
    </section>
  );
}
