window.onload = () => {
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  function dearticle(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }

  const bandsSorted = bands.sort((a,b) => dearticle(a) > dearticle(b) ? 1 : -1);
  console.log(bandsSorted)

  document.querySelector('#bands').innerHTML = bandsSorted.map(band => `<li>${band}</li>`)
  .join('')
}