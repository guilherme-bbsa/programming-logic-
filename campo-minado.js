const bombPosition = [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [6, 4], [6, 5], [6, 6]]
/* recebe cordenadas de uma celula e checa se a tal celula e uma bomba ou nao, caso for bomba retorna true caso n for uma bomba retorta false */
const  isBomb = (x , y) => {
  for(let c of bombPosition){
    if(c[0] === x && c[1] === y){
      return true
    }
  }
  return false
}
/* cria uma board apartir de um parametro que define o tamanho que a board tera, e prenche cada celula da board com -1 se for uma bomba, ou 0 se n for bomba*/
const createBoard = (boardSize) =>{
  let board = []
  for (let i = 0; i < boardSize; i++){
    let row = []
    for(let j = 0; j < boardSize; j++){
      const value =  isBomb(i,j) ? -1: 0
      row.push(value)
    }
    board.push(row)
  }
  return board
}
const printBoard = (board) => {
  if(board === 'game over'){
    return
  }
  for(let row of board){
    console.log(row.join(', '))
  }
}

/*
retorna um array de cordenadas dos vizinhos celula dada
*/
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
/*
  recebe uma board e para cada celula da board ela vai preencher :
  * -1 se a celula tiver uma bomba
  * se nao, numero de celulas vizinha que tenham bomba
*/
const populateBoard = (board) => {
  const newBoard = []
  for(let i = 0; i < board.length; i++) {
    const line = []
    for( let j = 0; j < board[i].length; j++) {
      if(board[i][j] === -1){
        line.push(-1)
      }
      else{
        const neighbors = getNeighbors(board, [i, j])
        let bomb = 0
        for( let n of neighbors){
          const [x , y] = n
          if(board[x][y] === -1){
            bomb += 1
          }
        }
        line.push(bomb)
      }
    }
    newBoard.push(line)
  }
  console.log(newBoard)
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
printBoard(populateBoard(board))
