// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  const voiceSelect = document.getElementById('voice-select');
  const textArea    = document.getElementById('text-to-speak');
  const talkButton  = document.querySelector('button');
  const faceImage   = document.querySelector('img');

  // Populate the voice dropdown
  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) option.textContent += ' — DEFAULT';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  // Press to Talk
  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) utterance.voice = selectedVoice;

    // Swap to open-mouth face only WHILE speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}