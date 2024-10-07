
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

const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const noteHistory = document.getElementById('note-history');

// Menyimpan catatan secara lokal
let localNotes = [];

// Fungsi untuk menambahkan catatan ke JSONPlaceholder
async function addNote(note) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });
        const data = await response.json();
        console.log('Note added:', data);

        // Simpan catatan ke array lokal dan perbarui UI
        localNotes.push(data);
        displayNoteHistory(localNotes);
    } catch (error) {
        console.error('Error adding note:', error);
    }
}

// Fungsi untuk menampilkan riwayat catatan
function displayNoteHistory(notes) {
    noteHistory.innerHTML = '';
    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = `${note.title} - ${note.body}`;
        noteHistory.appendChild(listItem);
    });
}

// Event listener untuk menyimpan catatan
saveNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const now = new Date();
        // Membuat catatan baru
        const note = {
            title: noteText,
            body: `Disimpan pada: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
            userId: 1 // userId fiktif, sesuaikan dengan kebutuhan
        };
        // Menyimpan catatan ke JSONPlaceholder dan perbarui lokal
        addNote(note);
        // Kosongkan textarea
        noteInput.value = '';
    }
});


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

 const targetDate = new Date('2025-02-22T00:00:00').getTime();

        // Fungsi untuk menghitung mundur
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Hitung waktu yang tersisa
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Tampilkan hasil di elemen dengan ID 'countdown'
            document.getElementById('countdown').innerHTML = 
                days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";

            // Jika waktu habis, tampilkan pesan
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = "Waktu Habis!";
            }
        }

        // Update countdown setiap detik
        const interval = setInterval(updateCountdown, 1000);

let score = 0;
let isPlaying = false;
let target;

document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    score = 0;
    isPlaying = true;
    document.getElementById('score').innerText = `Skor: ${score}`;
    moveTarget();
}

function moveTarget() {
    if (!isPlaying) return;

    target = document.getElementById('target');
    const gameArea = document.getElementById('gameArea');

    const x = Math.random() * (gameArea.clientWidth - 100);
    const y = Math.random() * (gameArea.clientHeight - 100);

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    
    target.addEventListener('click', hitTarget);

    setTimeout(() => {
        if (isPlaying) {
            moveTarget();
        }
    }, 1000);
}

function hitTarget() {
    score++;
    document.getElementById('score').innerText = `Skor: ${score}`;
    moveTarget();
}

// Menambahkan event listener untuk menghentikan permainan jika foto tidak dipukul dalam waktu tertentu
setTimeout(() => {
    if (isPlaying) {
        isPlaying = false;
        alert(`Permainan selesai! Skor akhir: ${score}`);
    }
}, 150000); // 15 detik permainan
