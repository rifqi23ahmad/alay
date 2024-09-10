// Logika Game
const balloon = document.getElementById("balloon");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-game");
let score = 0;
let gameActive = false;
let gameTime = 1000; // durasi permainan dalam detik
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
    gameTimer = setTimeout(endGame, gameTime * 10000);

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
    setTimeout(moveBalloon, 800);
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

// Logika game sebelumnya
// Lightbox sebelumnya

// Menyimpan Catatan
const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const noteHistory = document.getElementById('note-history');

// Variabel untuk menyimpan catatan
let notes = [];

saveNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const now = new Date();
        // Menyimpan catatan baru ke dalam array
        notes.push({ text: noteText, time: now });
        // Menampilkan riwayat catatan
        displayNoteHistory();
        // Kosongkan textarea
        noteInput.value = '';
    }
});

function displayNoteHistory() {
    // Bersihkan daftar catatan yang ada
    noteHistory.innerHTML = '';
    // Menambahkan setiap catatan ke dalam daftar
    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = `${note.text} - Disimpan pada: ${note.time.toLocaleDateString()} ${note.time.toLocaleTimeString()}`;
        noteHistory.appendChild(listItem);
    });
}

// Kalkulator
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}