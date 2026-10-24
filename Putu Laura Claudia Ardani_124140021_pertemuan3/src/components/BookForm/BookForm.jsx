import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BookForm.css";

function BookForm({ onSave, editingBook, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("milik");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(editingBook ? editingBook.title : "");
    setAuthor(editingBook ? editingBook.author : "");
    setStatus(editingBook ? editingBook.status : "milik");
    setError("");
  }, [editingBook]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError("Judul dan nama penulis harus diisi dulu.");
      return;
    }
    onSave({
      ...(editingBook || {}),
      title: title.trim(),
      author: author.trim(),
      status,
    });
    setTitle("");
    setAuthor("");
    setStatus("milik");
    setError("");
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>{editingBook ? "Edit buku" : "Tambah buku baru"}</h2>
      <div className="form-grid">
        <label className="field">
          Judul buku
          <input
            className={error && !title.trim() ? "invalid" : ""}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Cinderella"
          />
        </label>
        <label className="field">
          Nama penulis
          <input
            className={error && !author.trim() ? "invalid" : ""}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Nama penulis"
          />
        </label>
        <label className="field">
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="milik">Sudah dimiliki</option>
            <option value="baca">Sedang dibaca</option>
            <option value="beli">Ingin dibeli</option>
          </select>
        </label>
        <button type="submit">{editingBook ? "Simpan" : "Tambah buku"}</button>
      </div>
      {error && <p className="error">{error}</p>}
      {editingBook && (
        <button type="button" className="secondary cancel" onClick={onCancel}>
          Batal edit
        </button>
      )}
    </form>
  );
}
BookForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  editingBook: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
};
BookForm.defaultProps = { editingBook: null };
export default BookForm;
