
 
 window.addEventListener('keydown', drumItUp); //adds an event listener to the window that listens for the keydown event and calls the DrumItUp function
 const allKeys = document.querySelectorAll('.key'); //selects all the key elements\
 //console.log(allKeys); //logs the allKeys NodeList to the console
 allKeys.forEach(key => {
  key.addEventListener('transitionend', makeTransitionDisappear); //adds an event listener to each key that listens for the end of the transition
 });

function drumItUp(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects the audio element that matches the keycode of the pressed key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects the key element that matches the keycode of the pressed key
  
  if (!audio) return; //stops the function to run if the wrong key is pressed
  audio.currentTime=0;
  audio.play();
  key.classList.add('playing');

  //console.log("funciton called");
 }

 


 function makeTransitionDisappear(e) {
    console.log(e.propertyName); //logs the property name of the transition
  if (e.propertyName !== 'transform') return; //skip the function altogether if the property is not a transform
  this.classList.remove('playing'); //remove the playing class from the key
 }
