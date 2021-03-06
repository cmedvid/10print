/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
  EDITED by catie medvid
*/

// some nice constants
const w = process.stdout.columns
const halfW = Math.floor(w/2)
const characters = ['┼', '├', '┬', '┤', '┴']
const color = ['\x1b[32m', '\x1b[33m']
const intensity = ['\x1b[1m', '\x1b[2m']

// random character generator for triangle fill
function getChar() {
  return characters[Math.floor(Math.random() * Math.floor(5))]
}

// random color generator for triangle fill
function getColor() {
  if (Math.random() > 0.2) {
    return color[0] // green
  }
  else {
    return color[1] // yellow
  }
}

function getIntensity() {
  if (Math.random() < 0.3) {
    return intensity[0] // bright
  }
  else {
    return intensity[1] // dim
  }
}

// format lines
function drawLine(num, rightNum) {
  let output = ''
  for (let i = 0; i < w; i++) {
    output += '\x1b[40m' // background to black
    if (i < (halfW - 1 - num) || i > (halfW + rightNum) 
        || i == (halfW + 1) || i == (halfW - 1)) {
      output += ' '
    }
    else if (i == halfW) {
      output += '\x1b[37m\x1b[2m' // white
      output += '│' // play around some to find a divider u like
      output += '\x1b[0m' // reset color settings
    }
    else {
      output += getIntensity()
      output += getColor()
      output += getChar()
      output += '\x1b[0m' // reset color settings
    }
  }
  output += '\x1b[0m' // reset color settings
  console.log(output)
}

// create a triangle-like figure
function drawTriangles() {
  const layers = (Math.floor(Math.random() * Math.floor(w/5)) + 4)
  let output = ''
  let subCount = 1
  for (let length = 1; length <= layers ; length += 2){ // layer in triangle
    // set subCount for right side triangles
    if (length > Math.floor(layers/3) 
        && length <= layers - Math.floor(layers/5)) {
      subCount += 2
    }
    else {
      subCount = 1
    }
    // draw each line
    drawLine(length, subCount)
  }
  // spaces between triangles
  drawLine(0, 0)
  let j = Math.floor(Math.random() * Math.floor(6))
  for (j; j > 0; j--){
    drawLine(0, 0)
  }
}

function drawMyChildren() {
  setTimeout(drawMyChildren, 100) 
  drawTriangles()
}

drawMyChildren()
