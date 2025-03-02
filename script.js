const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

const playlist = [
    { title: "Summertime Sadness", artist: "Lana Del Rey", src: "C:\Users\KIIT\Documents\Music Player\SummerTimeSadness.mp3" },
    { title: "My Love Mine All Mine", artist: "Mitski", src: "C:\Users\KIIT\Documents\Music Player\MyLoveMineAllMine.mp3" },
    { title: "Perfect", artist: "Ed Sheeran", src: "C:\Users\KIIT\Documents\Music Player\Perfect.mp3" }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = playlist[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
}

function playSong() {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
}

function pauseSong() {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
}

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
});

// Load the first song
loadSong(currentSongIndex);
