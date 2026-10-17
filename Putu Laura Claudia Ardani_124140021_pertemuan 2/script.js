class JadwalKuliah {
  constructor({ id, course, day, time, place = '' }) {
    this.id = id || Date.now().toString();
    this.course = course;
    this.day = day;
    this.time = time;
    this.place = place;
  }
}

class DashboardApp {
  constructor() {
    this.form = document.querySelector('#scheduleForm');
    this.courseInput = document.querySelector('#course');
    this.dayInput = document.querySelector('#day');
    this.timeInput = document.querySelector('#time');
    this.placeInput = document.querySelector('#place');
    this.editIdInput = document.querySelector('#editId');
    this.scheduleList = document.querySelector('#scheduleList');
    this.filterDay = document.querySelector('#filterDay');
    this.total = document.querySelector('#total');
    this.saveBtn = document.querySelector('#saveBtn');
    this.cancelBtn = document.querySelector('#cancelEdit');
    this.days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    this.schedules = this.loadSchedules();
    this.addEvents();
    this.showSchedules();
  }

  loadSchedules() {
    try {
      const saved = JSON.parse(localStorage.getItem('jadwalKuliah') || '[]');
      return saved.map(item => new JadwalKuliah(item));
    } catch (error) {
      return [];
    }
  }

  saveSchedules() {
    localStorage.setItem('jadwalKuliah', JSON.stringify(this.schedules));
  }

  addEvents() {
    this.form.addEventListener('submit', (event) => this.saveForm(event));
    this.scheduleList.addEventListener('click', (event) => this.handleListClick(event));
    this.filterDay.addEventListener('change', () => this.showSchedules());
    this.cancelBtn.addEventListener('click', () => this.resetForm());
    document.querySelector('#quoteBtn').addEventListener('click', () => this.loadQuote());
  }

  escapeText(text) {
    return String(text).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
  }

  showSchedules() {
    const selectedDay = this.filterDay.value;
    const filtered = this.schedules
      .filter(item => selectedDay === 'Semua' || item.day === selectedDay)
      .sort((a, b) => this.days.indexOf(a.day) - this.days.indexOf(b.day) || a.time.localeCompare(b.time));

    this.total.textContent = `${this.schedules.length} jadwal tersimpan`;
    if (filtered.length === 0) {
      this.scheduleList.innerHTML = '<p class="empty">Belum ada jadwal untuk ditampilkan.</p>';
      return;
    }

    this.scheduleList.innerHTML = filtered.map(item => `
      <div class="schedule-item">
        <div>
          <h3>${this.escapeText(item.course)}</h3>
          <p>${item.day}, ${item.time} · ${this.escapeText(item.place || 'Ruang belum diisi')}</p>
        </div>
        <div class="actions">
          <button type="button" data-action="edit" data-id="${item.id}">Edit</button>
          <button type="button" class="delete" data-action="delete" data-id="${item.id}">Hapus</button>
        </div>
      </div>`).join('');
  }

  saveForm(event) {
    event.preventDefault();
    const course = this.courseInput.value.trim();
    if (!course) return;

    const data = {
      course,
      day: this.dayInput.value,
      time: this.timeInput.value,
      place: this.placeInput.value.trim()
    };

    if (this.editIdInput.value) {
      this.schedules = this.schedules.map(item => item.id === this.editIdInput.value
        ? new JadwalKuliah({ ...item, ...data }) : item);
    } else {
      this.schedules = [...this.schedules, new JadwalKuliah(data)];
    }

    this.saveSchedules();
    this.resetForm();
    this.showSchedules();
  }

  handleListClick(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const item = this.schedules.find(schedule => schedule.id === button.dataset.id);
    if (!item) return;

    if (button.dataset.action === 'edit') {
      this.courseInput.value = item.course;
      this.dayInput.value = item.day;
      this.timeInput.value = item.time;
      this.placeInput.value = item.place;
      this.editIdInput.value = item.id;
      this.saveBtn.textContent = 'Simpan perubahan';
      this.cancelBtn.classList.remove('hidden');
      this.courseInput.focus();
    } else if (button.dataset.action === 'delete' && confirm('Hapus jadwal ini?')) {
      this.schedules = this.schedules.filter(schedule => schedule.id !== item.id);
      this.saveSchedules();
      this.showSchedules();
    }
  }

  resetForm() {
    this.form.reset();
    this.timeInput.value = '09:00';
    this.editIdInput.value = '';
    this.saveBtn.textContent = 'Simpan jadwal';
    this.cancelBtn.classList.add('hidden');
  }

  async loadQuote() {
    const quoteText = document.querySelector('#quoteText');
    const quoteBtn = document.querySelector('#quoteBtn');
    quoteBtn.disabled = true;
    quoteText.textContent = 'Mengambil kutipan...';
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) throw new Error('Permintaan gagal');
      const result = await response.json();
      quoteText.textContent = `${result.quote} — ${result.author}`;
    } catch (error) {
      quoteText.textContent = 'Semangat kuliahnya, satu-satu aja.';
    } finally {
      quoteBtn.disabled = false;
    }
  }
}

const app = new DashboardApp();
