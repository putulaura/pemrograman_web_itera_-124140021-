import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">BUKU-BUKU</p>
          <h1>Buku Princess</h1>
        </div>
        <nav>
          <Link to="/">Beranda</Link>
          <Link to="/stats">Data Buku</Link>
          <Link to="/about">Tentang</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>MY BOOK</footer>
    </div>
  );
}
export default App;
