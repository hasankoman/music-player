
const setMusic = (step) => {
  if (step == "next") {
    music.musicIndex += 1;
    setMusicPlayer(music.musicIndex);
    audio.play();
    document.querySelector(".music-info .music-name").textContent = music
      .bringMusic()
      .getMusicName();
    document.querySelector(".music-info .artist-name").textContent = music
      .bringMusic()
      .getArtistName();
  } else if (step == "previous") {
    music.musicIndex -= 1;
    setMusicPlayer(music.musicIndex);
    audio.play();
    document.querySelector(".music-info .music-name").textContent = music
      .bringMusic()
      .getMusicName();
    document.querySelector(".music-info .artist-name").textContent = music
      .bringMusic()
      .getArtistName();
  } else if (step == "start") {
    setMusicPlayer(music.musicIndex);
    document.querySelector(".music-info .music-name").textContent = music
      .bringMusic()
      .getMusicName();

    document.querySelector(".music-info .artist-name").textContent = music
      .bringMusic()
      .getArtistName();

    document.querySelector(".list-group li").classList.add("active");
  }
};

const nextMusic = () => {
  if (playPauseBtn.classList[1] == "fa-play") {
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  }

  if (music.musicIndex == musicList.length - 1) {
    music.musicIndex = -1;
    setMusic("next");
  } else {
    setMusic("next");
  }
};

const previousMusic = () => {
  if (playPauseBtn.classList[1] == "fa-play") {
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  }
  if (music.musicIndex == 0) {
    music.musicIndex = musicList.length;
    setMusic("previous");
  } else {
    setMusic("previous");
  }
};

const setMusicList = () => {
  let musicInfo = "";

  for (let i = 0; i < musicList.length; i++) {
    musicInfo += `
      
      <li class="list-group-item " onclick="setMusicIndex(this),listMusicControl(this),listPhotoControl(this),listInfoControl(this)">
            <div class="list-music-photo">
              <img src="img/${musicList[i].musicPhoto}" />
            </div>
            <div class="list-music-info">
              <p class="music-name">${musicList[i].musicName}</p>
              <p class="artist-name">${musicList[i].artistName}</p>
            </div>
          </li>
      
      
      `;
  }
  document.querySelector(".list-group").innerHTML = musicInfo;
};

let playPauseBtn = document.querySelector(".music-control").children[1];

playPauseBtn.addEventListener("click", function () {
  if (playPauseBtn.classList[1] == "fa-play") {
    audio.play();
  } else if (playPauseBtn.classList[1] == "fa-pause") {
    audio.pause();
  }
});

playPauseBtn.addEventListener("click", function () {
  if (playPauseBtn.classList[1] == "fa-play") {
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  } else if (playPauseBtn.classList[1] == "fa-pause") {
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
  }
});
