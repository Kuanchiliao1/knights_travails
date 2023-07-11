function Node(x, y) {
  // Return array of next possible moves given a position on board
  function findNextMoves(x, y) {
    console.log(x)
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

  function getValidMoves(movesArray) {
    return movesArray.filter(movePosition => {
      const [x, y] = movePosition
      return (x >= 0 && y >= 0 && x <= 7 && y <= 7)
    })
  }

  function getChildren(x, y) {
    const possibleMoves = findNextMoves(x, y);
    const validMoves = getValidMoves(possibleMoves)
    return validMoves.map(move => {
      return Node(...move)
    })
  }

  function getPath() {

  }

  return {
    pathToCurrent: () => getPath(),
    children: () => getChildren(x, y),
  }
}

const node = Node(0, 0)
console.log(node.children(0, 0))
// console.log(findNextMoves(3, 3))