/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
  EDITED by catie medvid
*/

// some nice constants
const w = process.stdout.columns
const halfW = Math.floor(w/2)
const characters = ['┼', '├', '┬', '┤', '┴']
const color = ['\x1b[32m', '\x1b[33m']

// random character generator for triangle fill
function getChar() {
  return characters[Math.floor(Math.random() * Math.floor(5))]
}

// random color generator for triangle fill
function getColor() {
  if (Math.random() > 0.2) {
    return color[0]
  }
  else {
    return color[1]
  }
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
      output += '\x1b[30m'
      output += '│' // play around some to find a divider u like
    }
    else {
      output += getColor()
      output += getChar()
    }
  }
  // output += '\x1b[40m'
  console.log(output)
}

// create a triangle-like figure
function drawTriangles() {
  const i = Math.floor(Math.random() * Math.floor(w/5))
  for (let j = 1; j <= i ; j += 2){
    drawLine(j)
  }
  drawLine(0)
  let j = Math.floor(Math.random() * Math.floor(6))
  for (j; j > 0; j--){
    drawLine(0)
  }
}

function drawMyChildren() {
  setTimeout(drawMyChildren, 100) 
  drawTriangles()
}

drawMyChildren()
