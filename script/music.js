const songs = [
    { title: "Anh Luon Nhu Vay", src: "AnhLuonNhuVay-BRay-11853369.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

let currentSongIndex = 0;
let audio = document.getElementById("audio"); // Dùng let để tránh trùng khai báo
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// Kiểm tra nếu phần tử bị null do chưa load xong DOM
document.addEventListener("DOMContentLoaded", () => {
    audio = document.getElementById("audio");
    loadSong(currentSongIndex);
});

function loadSong(index) {
    if (!audio) return; // Nếu audio chưa load xong, thoát khỏi hàm

    const song = songs[index];
    audio.src = song.src;
    audio.load(); // Đảm bảo bài hát được tải
}

function playPause() {
    if (!audio) return;

    if (audio.paused) {
        audio.play().catch(error => console.error("Lỗi phát nhạc:", error));
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸";
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸";
}

// Cập nhật thanh tiến trình
audio.addEventListener("timeupdate", () => {
    if (!audio || isNaN(audio.duration)) return;
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

// Xử lý kéo thanh tiến trình
progressBar.addEventListener("input", () => {
    if (!audio || isNaN(audio.duration)) return;
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

audio.addEventListener("ended", nextSong);
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Load bài hát đầu tiên khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    loadSong(currentSongIndex);
});
