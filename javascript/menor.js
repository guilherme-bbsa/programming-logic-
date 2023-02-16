const testCase = [[-12,-12],[-12,-12],[-12,-12],[-12,-12]]

const menor = (matriz) => {
  let menor;
  for(let i = 0; i < matriz.length; i++){
    console.log(menor)
    for(let j = 0; j < matriz[i].length; j++){
      if(menor === undefined){
        menor = matriz[i][j]
      }
      if(matriz[i][j] < menor){
        menor = matriz[i][j]
      }
    }
  }
  return menor
 }
console.log(menor(testCase))