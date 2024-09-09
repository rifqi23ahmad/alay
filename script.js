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

// Logika game dan lightbox sebelumnya

// Catatan - menggunakan localStorage
const noteInput = document.getElementById("note-input");
const saveNoteButton = document.getElementById("save-note");
const savedNoteContainer = document.getElementById("saved-note");
const savedNoteTime = document.getElementById("saved-note-time");

// Fungsi untuk menyimpan catatan ke localStorage
saveNoteButton.addEventListener("click", () => {
    const noteContent = noteInput.value;
    const currentDateTime = new Date();  // Ambil waktu saat ini

    if (noteContent.trim() !== "") {
        // Simpan catatan dan waktu pembuatan ke localStorage
        localStorage.setItem("savedNote", noteContent);
        localStorage.setItem("savedNoteTime", currentDateTime.toLocaleString());  // Format tanggal dan waktu
        displaySavedNote();  // Tampilkan catatan tersimpan
        noteInput.disabled = true;  // Disable input agar tidak bisa diubah
        saveNoteButton.disabled = true;  // Disable tombol simpan setelah catatan disimpan
    }
});

// Fungsi untuk menampilkan catatan yang tersimpan
function displaySavedNote() {
    const savedNote = localStorage.getItem("savedNote");
    const savedTime = localStorage.getItem("savedNoteTime");

    if (savedNote) {
        savedNoteContainer.textContent = savedNote;  // Tampilkan catatan tersimpan
        savedNoteTime.textContent = `Dibuat pada: ${savedTime}`;  // Tampilkan waktu pembuatan
        noteInput.disabled = true;  // Matikan input agar tidak bisa diubah
        saveNoteButton.disabled = true;  // Disable tombol simpan
    }
}

// Tampilkan catatan tersimpan ketika halaman dimuat
window.addEventListener("load", () => {
    displaySavedNote();
});
