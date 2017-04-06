window.onload = () => {
  const panel = document.querySelectorAll('.panel')

    function toggleOpen() {
      this.classList.toggle('open')
    }

    function toggleActive(e) {
      if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
      }
    }

    panel.forEach(panel => panel.addEventListener('click', toggleOpen))
    panel.forEach(panel => panel.addEventListener('transitionend', toggleActive))
}