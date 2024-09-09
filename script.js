document.addEventListener('DOMContentLoaded', () => {
    const showHeartButton = document.getElementById('showHeart');
    const heartImage = document.getElementById('heartImage');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music
    backgroundMusic.volume = 0.2; // Adjust volume as needed
    backgroundMusic.play();

    showHeartButton.addEventListener('click', () => {
        heartImage.classList.toggle('hidden');
    });

    // Initialize particles
    particlesJS.load('particleBackground', 'particles.json', function() {
        console.log('particles.js config loaded');
    });
});
