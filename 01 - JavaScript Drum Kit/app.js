//press a key in keyboard
window.addEventListener("keydown", function (e) {
  //select the audio that has that data type
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
});
//play the corresponding sound
