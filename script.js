document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        // Partikel.js
        particlesJS.load('particleBackground', 'particles.json', function() {
            console.log('particles.js config loaded');
        });
    
        // Existing code
    });
    
    const showHeartButton = document.getElementById('showHeart');
    const heartImage = document.getElementById('heartImage');
    const changeMessageButton = document.getElementById('changeMessage');
    const messageElement = document.getElementById('message');
   
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music
    backgroundMusic.volume = 0.2; // Adjust volume as needed
    backgroundMusic.play();

    showHeartButton.addEventListener('click', () => {
        heartImage.classList.toggle('hidden');
    });

    changeMessageButton.addEventListener('click', () => {
        const newMessage = prompt('Masukkan pesan permintaan maaf baru:');
        if (newMessage) {
            messageElement.textContent = newMessage;
        }
    });
});
