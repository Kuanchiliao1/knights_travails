// Return array of next possible moves given a position on board
function findNextMoves(x, y) {
  const array = []
  for (let xOffset = -2; xOffset <= 2; xOffset++) {
    if (xOffset === 0) continue
    let yOffset
    if (Math.abs(xOffset) === 1) {
      yOffset = 2

    } else {
      yOffset = 1
    }
    array.push([xOffset + x, yOffset + y])
    array.push([xOffset + x, -yOffset + y])
  }
  return array
}

console.log(findNextMoves(3, 3))