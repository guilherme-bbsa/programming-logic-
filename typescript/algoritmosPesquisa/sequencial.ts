/*
A pesquisa sequencial é um método simples de pesquisa em que um elemento é procurado em uma lista comparando-o
com cada elemento da lista em sequência.


*/

function sequentialSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  

//   Nesta implementação, o método sequentialSearch recebe um array de números e o valor de destino e retorna 
//   o índice do valor de destino no array ou -1 se o valor de destino não for encontrado. 
//   O método começa percorrendo o array de 0 até o comprimento do array. 
//   Se o valor do índice atual do array for igual ao valor de destino, o método retorna o índice atual. 
//   Se o valor de destino não for encontrado após percorrer todo o array, o método retorna -1.