window.onload = () => {
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((total, seconds) => total + seconds);
    
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const minutes = Math.floor(secondsLeft / 60 );
    secondsLeft = secondsLeft % 60;
    let h1 = document.createElement('h1')
    h1.innerHTML = `Total time: ${hours}:${minutes}:${secondsLeft}`;
    document.getElementsByTagName('body')[0].prepend(h1);
}
