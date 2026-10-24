import { Link } from 'react-router-dom'
function NotFound() { return <main className="panel"><h2>Halaman tidak ditemukan</h2><p className="muted">Alamat yang kamu buka tidak tersedia.</p><Link to="/">Kembali ke beranda</Link></main> }
export default NotFound
