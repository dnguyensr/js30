window.onload = () => {
  window.addEventListener("keydown", function(e){
    animateKey(e.keyCode)
    playAudio(e.keyCode)
  })

  function animateKey(key){
    const keyContainer = document.querySelector(`div[data-key="${key}"]`)
    if(!keyContainer) return;
    keyContainer.classList.add('playing')
  }

  function playAudio(key){
    const audio = document.querySelector(`audio[data-key="${key}"]`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
  }

  function removeTransition(e) {
    console.log("removetransition")
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
}