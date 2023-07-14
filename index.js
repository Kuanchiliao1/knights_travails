'use strict'
function Tree(x, y) {
  const pastMoves = [[1,4], [1,2]]
  let root = Node(x, y)
  
  const buildTree = (node = root) => {
    createChildren(node)
    const children = node.children
    children.forEach(childNode => {
      console.log(childNode.position)
      // pastMoves.push(childNode.position)
    })
    console.log(pastMoves)
  }

  const createChildren = (node) => {
    let [x, y] = node.position
    console.log([x, y])
    const possibleMoves = node.findNextMoves(x, y);
    // Use the pastMoves to validate
    const validMoves = possibleMoves.filter(move => {
      const [x1, y1] = move
      const checkUnvisited = !pastMoves.some(move => x1 === move[0] && y1 === move[1])
      const checkInBound = (x1 >= 0 && y1 >= 0 && x1 <= 7 && y1 <= 7)
      return checkUnvisited && checkInBound
    })
    node.children = validMoves.map(move => {
      console.log(this)
      move
      pastMoves.push(move)
      return Node(...move)
    })
  }

  return {
    buildTree,
    createChildren
  }
}

Tree(3,3).buildTree()

function Node(x, y, parent) {
  const children = []

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

  function getValidMoves(movesArray) {
    return movesArray.filter(movePosition => {
      const [x, y] = movePosition
      return (x >= 0 && y >= 0 && x <= 7 && y <= 7)
    })
  }

  function addChild(child) {

  }

  function getPath() {
    console.log(this)
    if (this.parent) {
      console.log(this.parent())
      return this.parent()
    } else {
      return [x, y]
    }
  }

  console.log([x, y])

  return {
    getPath,
    findNextMoves,
    children,
    position: [x, y],
    parent,
  }
}

// const node = Node(3, 0)
// console.log(node.children())
// console.log(findNextMoves(3, 3))