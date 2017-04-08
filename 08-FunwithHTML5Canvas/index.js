window.onload = () => {
  const radios = document.querySelectorAll("input[type=radio]")
  const selectors = document.getElementById('globalCompmositeOperation')
  // const width = document.getElementsByName('lineWidth')

  for(radio in radios) {
    radios[radio].onclick = function(){
      let type = this.dataset.type
      let value = this.value
      if (type === 'lineCap') {
        ctx.lineCap = value
      } else {
        ctx.lineJoin = value
      }
    }
  }

  // function handleLineWidth() {
  //   let value = width[0].value
  //   ctx.lineWidth = parseInt(value)
  // }

  selectors.addEventListener("click", function(e) {
    let value = selectors.options[selectors.selectedIndex].value
    ctx.globalCompositeOperation = value
  })

  const canvas = document.querySelector('#draw')
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.strokeStyle = '$BADA55'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.globalCompositeOperation = 'color-burn'

  let isDrawing = false
  let lastX = 0
  let lastY = 0
  let hue = 0
  let direction = false

  function draw(e) {
    if(!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%`
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    ctx.lineWidth = 0
    lastX = e.offsetX
    lastY = e.offsetY
    hue++
    if (hue >= 360) {
      hue = 0
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction
    }

    if(direction) {
      ctx.lineWidth++
    } else {
      ctx.lineWidth--
    }
    lastX = e.offsetX
    lastY = e.offsetY
  }
  canvas.addEventListener('mousedown', (e) => { 
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
  })

  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', () => isDrawing = false)
  canvas.addEventListener('mouseout', () => isDrawing = false)
}