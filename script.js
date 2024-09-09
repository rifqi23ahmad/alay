// Logika Game
const balloon = document.getElementById("balloon");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-game");
let score = 0;
let gameActive = false;
let gameTime = 10; // durasi permainan dalam detik
let gameTimer;

// Fungsi untuk memulai permainan
startButton.addEventListener("click", startGame);

function startGame() {
    if (gameActive) return; // Jika game sudah berjalan, abaikan
    gameActive = true;
    score = 0;
    scoreDisplay.innerText = "Skor: " + score;
    startButton.disabled = true;

    // Mulai hitungan waktu
    gameTimer = setTimeout(endGame, gameTime * 1000);

    moveBalloon();
}

// Fungsi untuk mengakhiri permainan
function endGame() {
    gameActive = false;
    alert("Permainan selesai! Skor akhir: " + score);
    startButton.disabled = false;
}

// Fungsi untuk menggerakkan balon secara acak
function moveBalloon() {
    if (!gameActive) return;

    const maxX = 250; // lebar game-container - lebar balon
    const maxY = 230; // tinggi game-container - tinggi balon
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    balloon.style.left = randomX + "px";
    balloon.style.top = randomY + "px";

    // Balon akan bergerak setiap 700ms
    setTimeout(moveBalloon, 700);
}

// Fungsi untuk menambah skor ketika balon diklik
balloon.addEventListener("click", () => {
    if (gameActive) {
        score++;
        scoreDisplay.innerText = "Skor: " + score;
    }
});

// Lightbox untuk galeri
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-img");

// Ketika gambar diklik, buka lightbox dengan gambar yang diperbesar
galleryImages.forEach((img) => {
    img.addEventListener("click", (event) => {
        lightbox.style.display = "flex";
        lightboxImg.src = event.target.src;
    });
});

// Tutup lightbox saat tombol close diklik
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Tutup lightbox jika pengguna mengklik di luar gambar
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Fitur Catatan
const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

// Load catatan dari Local Storage saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadNotes);

// Event listener untuk form penambahan catatan
noteForm.addEventListener("submit", addNote);

// Fungsi untuk menambah catatan
function addNote(e) {
    e.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText === "") return;

    const note = {
        id: Date.now(),
        text: noteText
    };

    saveNoteToLocalStorage(note);
    displayNote(note);
    noteInput.value = "";
}

// Fungsi untuk menampilkan catatan di DOM
function displayNote(note) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.setAttribute("data-id", note.id);

    const noteContent = document.createElement("p");
    noteContent.innerText = note.text;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-note");
    deleteButton.innerHTML = "&times;";
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteButton);
    notesContainer.prepend(noteDiv);
}

// Fungsi untuk menghapus catatan
function deleteNote(id) {
    // Hapus dari DOM
    const noteDiv = document.querySelector(`.note[data-id='${id}']`);
    if (noteDiv) {
        notesContainer.removeChild(noteDiv);
    }

    // Hapus dari Local Storage
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Fungsi untuk menyimpan catatan ke Local Storage
function saveNoteToLocalStorage(note) {
    const notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Fungsi untuk mengambil catatan dari Local Storage
function getNotesFromLocalStorage() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
}

// Fungsi untuk memuat catatan saat halaman dimuat
function loadNotes() {
    const notes = getNotesFromLocalStorage();
    notes.forEach(note => displayNote(note));
}
