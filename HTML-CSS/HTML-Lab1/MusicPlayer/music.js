var songs = document.querySelectorAll("audio");
var titles = document.querySelectorAll("span");
var deleteItem = document.querySelectorAll("a");

var inputFile = document.getElementById("fileInput");

var isShuffle = false;
var isRepeat = false;
var isPlaying = false;
var shuffleSongs = [];

updateBtnStates();

songs.forEach((element, index) => {
  element.classList.add(`song-${index}`);
});

updateDeleting();
updateTitles();

function updateTitles() {
  titles.forEach((element, index) => {
    element.classList.add(`song-${index}`);
    element.addEventListener("click", function () {
      changeState(element, index);
    });
  });
}

function updateDeleting() {
  deleteItem.forEach((element, index) => {
    element.addEventListener("click", () => {
      deleteAudio(element);
    });
  });
}

function deleteAudio(e) {
  var className = e.previousElementSibling.className;
  songs.forEach((element) => {
    if (className === element.className.split(" ")[1]) {
      e.parentElement.remove();
      element.remove();
      update();
    }
  });
}

shuffle.addEventListener("click", () => {
  if (isShuffle === false) {
    shuffleSongs = [];
    isShuffle = true;
    updateBtnStates();
    while (shuffleSongs.length !== songs.length) {
      var n = Math.floor(Math.random() * songs.length);
      if (!shuffleSongs.includes(songs[n])) {
        shuffleSongs.push(songs[n]);
      }
    }
    stopAllAudios(songs);
    removeTitlesBg(titles);
    songs[n].play();
    shuffleSongs[0].setAttribute("controls", "");
    titles[n].style.backgroundColor = "rgb(214, 214, 214)";
  } else {
    isShuffle = false;
    updateBtnStates();
  }
});

play.addEventListener("click", () => {
  if (isPlaying !== true) {
    isPlaying = true;
    updateBtnStates();
    if (isShuffle === true) {
      stopAllAudios(songs);
      removeTitlesBg(titles);
      shuffleSongs[0].play();
      shuffleSongs[0].setAttribute("controls", "");
      document.getElementsByClassName(
        `${shuffleSongs[0].className.split(" ")[1]}`
      )[1].style.backgroundColor = "rgb(214, 214, 214)";
    } else {
      stopAllAudios(shuffleSongs);
      removeTitlesBg(titles);
      playAudio(0);
    }
  } else {
    isPlaying = false;
    updateBtnStates();
    stopAllAudios(songs);
    stopAllAudios(shuffleSongs);
    removeTitlesBg(titles);
  }
});

repeat.addEventListener("click", function () {
  isRepeat = true;
  updateBtnStates();
  songs.forEach((element) => {
    if (!element.hasAttribute("loop")) element.setAttribute("loop", "");
    else {
      !element.removeAttribute("loop");
      isRepeat = false;
      updateBtnStates();
    }
  });
});

inputFile.addEventListener(
  "change",
  function () {
    var length = titles.length;
    console.log(length);
    document.getElementsByClassName("songsName")[0].innerHTML += `<li >
    <span class="song-${length}">${this.files[0].name.split(".")[0]}</span>
    <a href="#"><i class="fa-solid fa-circle-xmark fa-lg"></i></a>
    </li>`;

    document.getElementById(
      "songs"
    ).innerHTML += `<audio class="musicPlayer song-${length}" src="./mp3/${this.files[0].name}">
    </audio>`;

    update();
    updateDeleting();
    updateTitles();

    titles.forEach((element, index) => {
      element.addEventListener("click", () => {
        changeState(element, index);
      });
    });
  },
  false
);

function playAudio(index) {
  songs[index].play();
  songs[index].setAttribute("controls", "");
  titles[index].style.backgroundColor = "rgb(214, 214, 214)";
}

function stopAllAudios(arr) {
  arr.forEach((element, index) => {
    element.removeAttribute("controls", "");
    element.pause();
    element.currentTime = 0;
  });
}

function removeTitlesBg(arr) {
  arr.forEach((element, index) => {
    element.style.backgroundColor = "rgb(188, 224, 255)";
  });
}
function changeState(e, i) {
  e.style.backgroundColor = "rgb(214, 214, 214)";
  checkAllAudios(i);
  songs[i].play();
  songs[i].setAttribute("controls", "");
  isPlaying = true;
  updateBtnStates();
}

function checkAllAudios(i) {
  songs.forEach((element, index) => {
    if (i !== index) {
      titles[index].style.backgroundColor = "rgb(188, 224, 255)";
      stopAudio(element);
    }
  });
}
function stopAudio(song) {
  if (!song.pause()) {
    song.removeAttribute("controls");
    song.currentTime = 0;
    song.pause();
  }
}

function update() {
  songs = document.querySelectorAll("audio");
  titles = document.querySelectorAll("span");
  deleteItem = document.querySelectorAll("a");
}

function updateBtnStates() {
  var state = document.querySelectorAll(".state");
  isShuffle === false
    ? (state[0].innerHTML = "Shuffle: OFF")
    : (state[0].innerHTML = "Shuffle: ON");

  isRepeat === false
    ? (state[1].innerHTML = "Repeat: OFF")
    : (state[1].innerHTML = "Repeat: ON");

  isPlaying === false
    ? (state[2].innerHTML = "Playing: OFF")
    : (state[2].innerHTML = "Playing: ON");
}
