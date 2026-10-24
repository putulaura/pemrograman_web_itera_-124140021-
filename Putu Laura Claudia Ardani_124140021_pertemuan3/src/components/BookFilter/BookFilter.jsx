import PropTypes from 'prop-types'
import './BookFilter.css'
function BookFilter({ search, onSearch, status, onStatus }) {
  return <div className="tools">
    <input aria-label="Cari buku" value={search} onChange={e => onSearch(e.target.value)} placeholder="Cari judul atau penulis..." />
    <select aria-label="Filter status" value={status} onChange={e => onStatus(e.target.value)}><option value="semua">Semua status</option><option value="milik">Sudah dimiliki</option><option value="baca">Sedang dibaca</option><option value="beli">Ingin dibeli</option></select>
  </div>
}
BookFilter.propTypes = { search: PropTypes.string.isRequired, onSearch: PropTypes.func.isRequired, status: PropTypes.string.isRequired, onStatus: PropTypes.func.isRequired }
export default BookFilter
