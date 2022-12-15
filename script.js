const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const name = document.getElementById("name");

const songs = [
  {
    name: "kalpit-1",
    title: "Save Your Tears",
    artist: "The Weeknd",
  },

  {
    name: "kalpit-2",
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
  },

  {
    name: "kalpit-3",
    title: "Levitating",
    artist: "Dua Lipa",
  },
];

play.addEventListener("click", () => {
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("amine");
});

let isPlaying = false;
// for play fucntion
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("amine");
};

// for pause fucntion
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("amine");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// changing the music data
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "../" + songs.name + ".mp3";
  img.src = "../" + songs.name + ".jpg";
};

songIndex = 2;
// loadSong(songs[0]);
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
