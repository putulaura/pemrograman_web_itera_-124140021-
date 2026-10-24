import { useMemo, useState } from "react";
import BookForm from "../../components/BookForm/BookForm";
import BookFilter from "../../components/BookFilter/BookFilter";
import BookList from "../../components/BookList/BookList";
import { useBooks } from "../../context/BookContext";
import "./Home.css";

function Home() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("semua");
  const [editingBook, setEditingBook] = useState(null);
  const filteredBooks = useMemo(
    () =>
      books.filter((book) => {
        const text = `${book.title} ${book.author}`.toLowerCase();
        return (
          text.includes(search.toLowerCase()) &&
          (status === "semua" || book.status === status)
        );
      }),
    [books, search, status],
  );

  function saveBook(book) {
    if (editingBook) updateBook(book);
    else addBook(book);
    setEditingBook(null);
  }

  function removeBook(id) {
    if (window.confirm("Yakin mau menghapus buku ini?")) {
      deleteBook(id);
      if (editingBook?.id === id) setEditingBook(null);
    }
  }

  return (
    <main>
      <section className="intro">
        <div>
          <p className="eyebrow">KUMPULAN BUKU</p>
          <h2 className="page-title">Simpan Buku Mu Di Sini</h2>
          <p className="muted">
            Simpan buku yang sudah punya, lagi dibaca, atau masuk wishlist.
          </p>
        </div>
        <div className="book-count">
          {books.length}
          <span> buku tersimpan</span>
        </div>
      </section>
      <BookForm
        onSave={saveBook}
        editingBook={editingBook}
        onCancel={() => setEditingBook(null)}
      />
      <section className="panel">
        <h2>Koleksi buku</h2>
        <BookFilter
          search={search}
          onSearch={setSearch}
          status={status}
          onStatus={setStatus}
        />
        <BookList
          books={filteredBooks}
          onEdit={setEditingBook}
          onDelete={removeBook}
        />
      </section>
    </main>
  );
}
export default Home;
