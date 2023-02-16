const testCase = [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [6, 4], [6, 5], [6, 6]]

const sum = (line) => {
  let totalSum = 0
  for(let i = 0; i < line.length; i++){
    totalSum += line[i]
  }
  return totalSum
}

const averageCalc = (line) =>{
  const totalLineSum = sum(line)
  const averageResult = totalLineSum / line.length
  return averageResult
}
for(let i = 0; i < testCase.length; i++){
  console.log(averageCalc(testCase[i])
)}