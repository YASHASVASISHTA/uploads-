function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    const mp3FileInput = document.getElementById('mp3FileInput');

    const file = mp3FileInput.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    }
}
