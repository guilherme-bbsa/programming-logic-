// const readlineSync = require('readline-sync');
// const player = readlineSync.question('Digite aqui as suas cordenadas')
// console.log(player)


const createBoard = (boardSize) =>{
  let board = []
  for (let i = 0; i < boardSize; i++){
    let row = []
    for(let j = 0; j < boardSize; j++){
      row.push({ isBomb: false, open: false})
    }
    board.push(row)
  }
  loadBombs(board, boardSize)
  return board
}

/*Responsavel por gerar posiçoes aleatorias, defini a bomba nas posiçoes geradas aleatoriamente */
const loadBombs = (board,boardSize) => {
  let i = 0;
  while(i < boardSize){
    const x = Math.trunc(Math.random()*boardSize)
    const y = Math.trunc(Math.random()*boardSize)
    if(board[x][y].isBomb === false){
      board[x][y].isBomb = true
      i++
    }
  }
}

const getNeighbors = (board, coordinate) => {
  const [x , y] = coordinate
  const neighbors = []
  for( let dx = -1; dx <= 1; dx++) {
    for(let dy = -1; dy <= 1; dy ++) {
      const nx = x + dx
      const ny = y + dy

      if(dx === 0 && dy === 0){
        continue
      }
      if(nx < 0 || nx > board.length - 1  ){
        continue
      }
      if(ny < 0 || ny > board[nx].length -1){
        continue
      }
      neighbors.push([nx, ny])
    }
  }
  return neighbors
}

const populateBoard = (board) => {
  const newBoard = []
  for(let i = 0; i < board.length; i++) {
    const line = []
    for( let j = 0; j < board[i].length; j++) {
      if(board[i][j].isBomb){
        line.push(-1)
      }
      else{
        const neighbors = getNeighbors(board, [i, j])
        let bomb = 0
        for( let n of neighbors){
          const [x , y] = n
          if(board[x][y].isBomb){
            bomb += 1
          }
        }
        line.push(bomb)
      }
    }
    newBoard.push(line)
  }
  return newBoard
}

const board = createBoard(10)
const neighborsCount = []
for(let i = 0; i < board.length; i++) {
  const line = []
  for(let j = 0; j < board[i].length; j++){
    const neighbors = getNeighbors(board, [i, j])
    line.push(neighbors.length)
  }
  neighborsCount.push(line)
}


const printBoard = (board) => {
  if(board === 'game over'){
    return
  }
  for(let row of board){
    console.log(row.join('  '))
  }
}
printBoard(populateBoard(board))
