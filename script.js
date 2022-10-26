class Musics {
  constructor(musicName, artistName, musicPhoto, musicAudio) {
    this.musicName = musicName;
    this.artistName = artistName;
    this.musicPhoto = musicPhoto;
    this.musicAudio = musicAudio;
  }

  getMusicName() {
    return this.musicName;
  }
  getArtistName() {
    return this.artistName;
  }
  getMusicPhoto() {
    return this.musicPhoto;
  }
}

let musicList = [
  new Musics("Dayan", "Semicenk, Mustafa Ceceli", "dayan.jpg", "dayan.mp3"),
  new Musics("Son Perde", "Hande Ünsal", "son-perde.jpg", "Son-perde.mp3"),
  new Musics(
    "Boş İstasyonlar",
    "Kahraman Deniz",
    "bos-istasyonlar.jpg",
    "bos-istasyonlar.mp3"
  ),
  new Musics(
    "Dudaklarında Yalan Kalmış",
    "Taladro",
    "dudaklarinda-yalan-kalmis.jpg",
    "dudaklarinda-yalan-kalmis.mp3"
  ),
  new Musics(
    "Ben Çocuk Değilim",
    "Doğu Swag",
    "ben-cocuk-degilim.jpg",
    "ben-cocuk-degilim.mp3"
  ),
  new Musics("Bayram Yeri", "Pınar Süer", "bayram-yeri.jpg", "bayram-yeri.mp3"),
  new Musics(
    "Kararsızım",
    "Nahide Babashlı",
    "kararsizim.jpg",
    "kararsizim.mp3"
  ),
  new Musics("Kül", "Cem Adrian, Mark Eliyahu", "kul.jpg", "kul.mp3"),
];

const music = new Music(musicList);

function Music(musicList) {
  this.musicList = musicList;
  this.musicIndex = 0;
}

Music.prototype.bringMusic = function () {
  return this.musicList[this.musicIndex];
};
// setMusicPlayer();
// const setMusicPlayerIndex = () => {
//   console.log(music.musicIndex);
//   audio = document.querySelectorAll(".audio-list audio")[music.musicIndex];
//   console.log(calculateTime(audio.duration));
//   document.querySelector(".music-time-line-info .right-time").textContent =
//     calculateTime(audio.duration);
//   document.querySelector(".music-time input").max = Math.floor(audio.duration);
// };
const setMusicPlayer = (index) => {
  audio.src = `audio/${musicList[index].musicAudio}`;
};

let isListActive = false;
let isMusicPlaying = false;

document
  .querySelector(".other-buttons .fa-list")
  .addEventListener("click", function () {
    if (isListActive) {
      document
        .querySelector(".other-buttons .fa-list")
        .classList.remove("active");
      document.querySelector(".music-photo").classList.remove("list-active");
      document.querySelector(".music-photo").classList.add("list-nonactive");
      document.querySelector(".music-info").classList.remove("list-active");
      document.querySelector(".music-info").classList.add("list-nonactive");
      document.querySelector(".music-list").classList.remove("list-active");
      document.querySelector(".music-list").classList.add("list-nonactive");

      isListActive = false;
    } else {
      document.querySelector(".other-buttons .fa-list").classList.add("active");
      document.querySelector(".music-photo").classList.add("list-active");
      document.querySelector(".music-photo").classList.remove("list-nonactive");
      document.querySelector(".music-info").classList.add("list-active");
      document.querySelector(".music-info").classList.remove("list-nonactive");
      document.querySelector(".music-list").classList.add("list-active");
      document.querySelector(".music-list").classList.remove("list-nonactive");
      isListActive = true;
    }
  });
let prevMusicIndex;

const setMusicIndex = (selectMusic) => {
  let imgInfo = selectMusic
    .querySelector(".list-music-photo img")
    .getAttribute("src")
    .replace("img/", "");
  for (let i = 0; i < musicList.length; i++) {
    if (musicList[i].musicPhoto == imgInfo) {
      prevMusicIndex = music.musicIndex;
      music.musicIndex = i;
      setMusicPlayer(music.musicIndex);
      audio.play();
    }
  }
};

const listMusicControl = (selectMusic) => {
  let listItems = document.querySelector(".list-group").children;

  // let musicPhotos = item.querySelector(".list-music-photo img");
  let selectedMusic = selectMusic.querySelector(
    ".list-music-info .music-name"
  ).textContent;

  for (let item of listItems) {
    let musicNames = item.querySelector(
      ".list-music-info .music-name"
    ).textContent;

    if (selectedMusic == musicNames) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
};

const listPhotoControl = (selectMusic) => {
  // let musicPhotos = item.querySelector(".list-music-photo img");

  let selectedMusic = selectMusic
    .querySelector(".list-music-photo img")
    .getAttribute("src");
  let photoItems = document.querySelector(".carousel-inner").children;

  for (let item of photoItems) {
    let musicPhotos = item.querySelector("img").getAttribute("src");

    if (musicPhotos == selectedMusic) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
};

const listInfoControl = (selectMusic) => {
  let selectedMusic = selectMusic.querySelector(".list-music-info");
  let musicName = selectedMusic.querySelector(".music-name").textContent;
  let artistName = selectedMusic.querySelector(".artist-name").textContent;

  document.querySelector(
    ".container-card .music-info .music-name"
  ).textContent = musicName;
  document.querySelector(
    ".container-card .music-info .artist-name"
  ).textContent = artistName;
};

document
  .querySelector(".fixed-items .music-control .fa-backward")
  .addEventListener("click", function () {
    let listItems = document.querySelector(".list-group").children;

    let selectedMusic = music.bringMusic().getMusicName();
    for (let item of listItems) {
      musicNameTxt = item.querySelector(
        ".list-music-info .music-name"
      ).textContent;
      if (selectedMusic == musicNameTxt) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });
document
  .querySelector(".fixed-items .music-control .fa-forward")
  .addEventListener("click", function () {
    let listItems = document.querySelector(".list-group").children;

    let selectedMusic = music.bringMusic().getMusicName();
    for (let item of listItems) {
      musicNameTxt = item.querySelector(
        ".list-music-info .music-name"
      ).textContent;
      if (selectedMusic == musicNameTxt) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });

for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

const calculateTime = (time) => {
  const minute = Math.floor(time / 60);
  const second = Math.floor(time % 60);
  const updatedsecond = second < 10 ? `0${second}` : `${second}`;
  const result = `${minute}:${updatedsecond}`;
  return result;
};

let duration;
audio.addEventListener("loadedmetadata", () => {
  console.log("da");
  document.querySelector(".music-time-line-info .right-time").textContent =
    calculateTime(audio.duration);
  document.querySelector(".music-time input").max = Math.floor(audio.duration);
  duration = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  console.log("time");
  let current = Math.floor(audio.currentTime);
  document.querySelector(
    ".music-time input"
  ).style = `--value:${current}; --min:0; --max:${audio.duration};`;

  document.querySelector(".music-time input").value = Math.floor(
    audio.currentTime
  );

  document.querySelector(".music-time-line-info .left-time").textContent =
    calculateTime(document.querySelector(".music-time input").value);
});

document.querySelector(".music-time input").addEventListener("input", () => {
  document.querySelector(".music-time-line-info .left-time").textContent =
    calculateTime(document.querySelector(".music-time input").value);
  let current2 = document.querySelector(".music-time input").value;
  audio.currentTime = current2;
});

document
  .querySelector(".volume-control input")
  .addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
  });

setMusicList();

audio.volume = 0.5;

setMusic("start");
