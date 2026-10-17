const hasil = document.querySelector('#hasil');
const loading = document.querySelector('#loading');
const searchInput = document.querySelector('#search');
const searchResults = document.querySelector('#searchResults');

async function fetchDenganRetry(url, percobaan = 3) {
  for (let nomor = 1; nomor <= percobaan; nomor++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      if (nomor === percobaan) throw error;
      await new Promise(resolve => setTimeout(resolve, 400 * (2 ** (nomor - 1))));
    }
  }
}

async function muatData() {
  loading.textContent = 'Sedang mengambil data...';
  try {
    const [users, posts] = await Promise.all([
      fetchDenganRetry('https://jsonplaceholder.typicode.com/users?_limit=3'),
      fetchDenganRetry('https://jsonplaceholder.typicode.com/posts?_limit=3')
    ]);
    hasil.textContent = `Data dari 2 endpoint berhasil digabung.\nPengguna: ${users.length}\nPostingan: ${posts.length}\nContoh pengguna: ${users[0].name}\nContoh postingan: ${posts[0].title}`;
    await muatHalaman(1);
  } catch (error) {
    hasil.textContent = `Data tidak bisa diambil saat ini. Periksa koneksi internet.\nDetail: ${error.message}`;
  } finally {
    loading.textContent = 'Selesai mencoba mengambil data.';
  }
}

async function muatHalaman(halaman) {
  try {
    const data = await fetchDenganRetry(`https://jsonplaceholder.typicode.com/posts?_page=${halaman}&_limit=3`);
    hasil.textContent += `\n\nPagination halaman ${halaman}:\n${data.map(post => `- ${post.title}`).join('\n')}`;
  } catch (error) {
    hasil.textContent += '\nPagination gagal dimuat.';
  }
}

let timerCari;
const cariPost = async (kata) => {
  searchResults.textContent = 'Mencari...';
  try {
    const data = await fetchDenganRetry('https://jsonplaceholder.typicode.com/posts?_limit=30');
    const cocok = data.filter(post => post.title.toLowerCase().includes(kata.toLowerCase()));
    searchResults.textContent = cocok.slice(0, 5).map(post => post.title).join('\n') || 'Tidak ada hasil.';
  } catch (error) {
    searchResults.textContent = 'Pencarian gagal. Coba lagi nanti.';
  }
};
searchInput.addEventListener('input', () => {
  clearTimeout(timerCari);
  timerCari = setTimeout(() => {
    if (searchInput.value.trim()) cariPost(searchInput.value.trim());
    else searchResults.textContent = 'Ketik kata untuk mencari judul postingan.';
  }, 350);
});
muatData();
