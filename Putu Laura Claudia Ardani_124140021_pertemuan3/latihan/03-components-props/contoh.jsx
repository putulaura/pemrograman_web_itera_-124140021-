import PropTypes from 'prop-types'
function KartuBuku({ judul, penulis }) {
  return <article><h3>{judul}</h3><p>Penulis: {penulis}</p></article>
}
KartuBuku.propTypes = { judul: PropTypes.string.isRequired, penulis: PropTypes.string.isRequired }
export default function ContohProps() {
  return <KartuBuku judul="Bumi" penulis="Tere Liye" />
}
