const inputText = document.getElementById('input-text');
const convertBtn = document.getElementById('convert-btn');
const audioContainer = document.getElementById('audio-container');

convertBtn.addEventListener('click', () => {
    const text = inputText.value;
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);

    // Add audio element to container
    const audio = new Audio();
    audio.src = URL.createObjectURL(new Blob([new Uint8Array(speech.encodedMsg)], { type: 'audio/wav' }));
    audio.play();
    audioContainer.appendChild(audio);
});