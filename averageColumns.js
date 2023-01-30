const testCase = [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [6, 4], [6, 5], [6, 6]]

const sum = (matriz) =>{
  const columnSum = {}
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
      if(columnSum[j] === undefined){
        columnSum[j] = matriz[i][j]
      }
      else{
        columnSum[j] += matriz[i][j]
      }
    }
  }
  return columnSum
}
const averageCalc = (matriz)  => {
  const columnSize = matriz.length
  const totalColumnsSum = Object.values(sum(matriz))
  for(let i = 0; i < totalColumnsSum.length; i++){
    let result = totalColumnsSum[i] / columnSize
    console.log(result)
  }
}

averageCalc(testCase)