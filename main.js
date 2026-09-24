const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const lyrics = document.getElementById("lyrics");

const songs = [
  {
    title: "So Far Away",
    lyrics: "Never feared for anything, never shamed but never free...",
    file: "So Far Away.mp3",
    cover: "So Far Away.jpg",
  },
  {
    title: "Dear Good",
    lyrics: `A lonely road, crossed another cold state line...`,
    file: "Dear Good.mp3",
    cover: "Dear Good.jpg",
  },
  {
    title: "Gunslinger",
    lyrics: "Yeah, you've been alone, I've been gone for far too long...",
    file: "Gunslinger.mp3",
    cover: "Gunslinger.jpg",
  },
];

let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song.title; // Tampilkan nama lagu
  audio.src = `music/${song.file}`; // Muat file audio
  cover.src = `images/${song.cover}`; // Muat file gambar
  lyrics.innerText = song.lyrics; // Tampilkan lirik
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i").classList.replace("fa-play", "fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i").classList.replace("fa-pause", "fa-play");
  audio.pause();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
