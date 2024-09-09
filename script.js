const synth = window.speechSynthesis;
const speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("Select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => 
        (voiceSelect.options[i] = new Option(voice.name, i)))
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]
})


document.querySelector("button").addEventListener("click", () => {
     speech.text = document.querySelector("textarea").value;
    if ('speechSynthesis' in window) {
        synth.speak(speech);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech.");
    }
   
})