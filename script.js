document.addEventListener('DOMContentLoaded', () => {
    const showHeartButton = document.getElementById('showHeart');
    const heartImage = document.getElementById('heartImage');
    const changeMessageButton = document.getElementById('changeMessage');
    const messageElement = document.getElementById('message');

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
