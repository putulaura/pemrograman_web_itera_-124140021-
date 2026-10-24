import PropTypes from 'prop-types'
import './BookList.css'
const labels = { milik: 'Sudah dimiliki', baca: 'Sedang dibaca', beli: 'Ingin dibeli' }
function BookList({ books, onEdit, onDelete }) {
  if (!books.length) return <div className="empty">Belum ada buku yang cocok. Coba tambah buku atau ubah pencarian.</div>
  return <div className="book-grid">{books.map(book => <article className="book-card" key={book.id}>
    <span className="status">{labels[book.status]}</span>
    <h3>{book.title}</h3><p>Penulis: {book.author}</p>
    <div className="actions"><button className="secondary" onClick={() => onEdit(book)}>Edit</button><button className="danger" onClick={() => onDelete(book.id)}>Hapus</button></div>
  </article>)}</div>
}
BookList.propTypes = { books: PropTypes.array.isRequired, onEdit: PropTypes.func.isRequired, onDelete: PropTypes.func.isRequired }
export default BookList
