document
  .getElementById("form-mahasiswa")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const output = document.getElementById("form-output");

    if (nama.trim() === "" || nim.trim() === "") {
      output.innerHTML = "Nama dan NIM harus diisi!";
    } else {
      output.innerHTML = `
            <p>Nama: ${nama}</p>
            <p>NIM: ${nim}</p>
        `;
    }
  });

const dataMahasiswa = {
  nama: "Putu",
  nim: "123456",
};

localStorage.setItem("mahasiswa", JSON.stringify(dataMahasiswa));

const dataTersimpan = JSON.parse(localStorage.getItem("mahasiswa"));

console.log("Data localStorage:");
console.log(dataTersimpan);

let semuaData = [];

document
  .getElementById("btn-fetch")
  .addEventListener("click", async function () {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      semuaData = await response.json();

      tampilkanData(semuaData);
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  });

function tampilkanData(data) {
  const output = document.getElementById("api-output");

  output.innerHTML = "";

  data.slice(0, 10).forEach(function (post) {
    output.innerHTML += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            <hr>
        `;
  });
}

// Search berdasarkan title
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const hasil = semuaData.filter(function (post) {
    return post.title.toLowerCase().includes(keyword);
  });

  tampilkanData(hasil);
});

document.getElementById("dark-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

let todos = [];

function tampilkanTodo() {
  const list = document.getElementById("todo-list");

  list.innerHTML = "";

  todos.forEach(function (todo, index) {
    list.innerHTML += `
            <li>
                ${todo}
                <button onclick="hapusTodo(${index})">
                    Hapus
                </button>
            </li>
        `;
  });
}

document.getElementById("todo-button").addEventListener("click", function () {
  const input = document.getElementById("todo-input");
  const tugas = input.value;

  if (tugas.trim() !== "") {
    todos.push(tugas);

    input.value = "";

    tampilkanTodo();
  }
});

function hapusTodo(index) {
  todos.splice(index, 1);

  tampilkanTodo();
}
