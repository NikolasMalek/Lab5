// expose.js

const jsConfetti = new JSConfetti();

// Map each horn value (from the <select>) to its image + audio file
const hornData = {
  "air-horn": {
    image: "assets/images/air-horn.svg",
    audio: "assets/audio/air-horn.mp3",
  },
  "car-horn": {
    image: "assets/images/car-horn.svg",
    audio: "assets/audio/car-horn.mp3",
  },
  "party-horn": {
    image: "assets/images/party-horn.svg",
    audio: "assets/audio/party-horn.mp3",
  },
};

window.addEventListener("DOMContentLoaded", init);

function init() {
  // Grab references to all elements we care about
  const hornSelect  = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon  = document.querySelector("#volume-controls img");
  const hornImage   = document.querySelector("#expose > img");
  const audioElement = document.querySelector("audio");
  const playButton  = document.querySelector("button");

  // 1) Horn dropdown: change the image + the audio source
  hornSelect.addEventListener("change", () => {
    const choice = hornSelect.value;
    if (hornData[choice]) {
      hornImage.src   = hornData[choice].image;
      hornImage.alt   = choice.replace("-", " ");
      audioElement.src = hornData[choice].audio;
    }
  });

  // 2) Volume slider: update the icon + actually set audio volume
  volumeSlider.addEventListener("input", () => {
    const v = Number(volumeSlider.value); // 0 - 100

    // audio.volume is 0.0 - 1.0, NOT 0 - 100
    audioElement.volume = v / 100;

    let level;
    if (v === 0)        level = 0;
    else if (v < 33)    level = 1;
    else if (v < 67)    level = 2;
    else                level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // 3) Play button: play the sound, plus confetti for party horn
  playButton.addEventListener("click", () => {
    audioElement.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}