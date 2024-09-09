document.addEventListener('DOMContentLoaded', () => {
    const showHeartButton = document.getElementById('showHeart');
    const heartImage = document.getElementById('heartImage');

    showHeartButton.addEventListener('click', () => {
        heartImage.classList.toggle('hidden');
    });

    // Initialize particles
    particlesJS.load('particleBackground', 'particles.json', function() {
        console.log('particles.js config loaded');
    });
});
