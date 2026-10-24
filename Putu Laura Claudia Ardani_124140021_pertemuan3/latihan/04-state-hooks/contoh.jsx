import { useState } from 'react'
export default function ContohState() {
  const [nama, setNama] = useState('')
  return <section><label>Nama kamu <input value={nama} onChange={e => setNama(e.target.value)} /></label><p>Halo, {nama || 'teman'}!</p></section>
}
