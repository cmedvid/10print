/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
  EDITED by catie medvid
*/

// some nice constants
const w = process.stdout.columns
const halfW = Math.floor(w/2)
const characters = ['┼', '├', '┬', '┤', '┴']

// random character generator for triangle fill
function getChar() {
  return characters[Math.floor(Math.random() * Math.floor(5))]
}

// format lines
function drawLine(num) {
  let output = ''
  for (let i = 0; i < w; i++) {
    if (i < (halfW - 1 - num) || i > (halfW + 1 + num) 
        || i == (halfW + 1) || i == (halfW - 1)) {
      output += ' '
    }
    else if (i == halfW) {
      output += '╳' // play around some to find a divider u like
    }
    else {
      output += getChar()
    }
  }
  console.log(output)
}

// create a triangle-like figure
function drawTriangles() {
  let i = Math.floor(Math.random() * Math.floor(w/5))
  for (i; i > .5; i = Math.floor(i/1.5)){
    drawLine(i)
  }
  drawLine(0)
  let j = Math.floor(Math.random() * Math.floor(2))
  for (j; j > 0; j--){
    drawLine(0)
  }
}

function drawMyChildren() {
  setTimeout(drawMyChildren, 100) 
  drawTriangles()
}

drawMyChildren()
