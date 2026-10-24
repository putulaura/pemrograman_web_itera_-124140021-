import { Link } from "react-router-dom";
import { useBooks } from "../../context/BookContext";
import useBookStats from "../../hooks/useBookStats";
import "./Stats.css";
function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);
  return (
    <main>
      <p className="eyebrow">RINGKASAN</p>
      <h2 className="page-title">Data buku</h2>
      <p className="muted">Ringkasan koleksi yang sudah kamu catat.</p>
      <div className="stat-grid">
        <div className="stat">
          Total buku<strong>{stats.total}</strong>
        </div>
        <div className="stat">
          Sudah dimiliki<strong>{stats.milik}</strong>
        </div>
        <div className="stat">
          Sedang dibaca<strong>{stats.baca}</strong>
        </div>
        <div className="stat">
          Ingin dibeli<strong>{stats.beli}</strong>
        </div>
      </div>
      {!books.length && (
        <p className="muted">
          Belum ada data. <Link to="/">Tambah buku pertama kamu →</Link>
        </p>
      )}
    </main>
  );
}
export default Stats;
