/*
A ordenação por inserção é um algoritmo de classificação simples que percorre uma lista de elementos e, 
em cada iteração, insere o elemento atual na posição correta em uma sublista já ordenada.

*/ 

function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  

  
/*
Nesta implementação, o método insertionSort recebe um array de números e retorna o array ordenado. A variável current contém o elemento atual a ser inserido na sublista ordenada. A sublista ordenada começa no início do array e vai até o elemento anterior ao elemento atual.

O laço externo percorre a lista a partir do segundo elemento (índice 1), 
porque a sublista ordenada no início contém apenas o primeiro elemento (índice 0). 
Em cada iteração, o elemento atual é comparado com os elementos da sublista ordenada e inserido na posição correta. 
O laço interno percorre a sublista ordenada da direita para a esquerda e move os elementos maiores do que 
o elemento atual para a direita, abrindo espaço para a inserção. 
Quando a posição correta é encontrada, o elemento atual é inserido na lista.

*/

// const arr = [5, 3, 1, 4, 2];
// const sortedArr = insertionSort(arr);
// console.log(sortedArr); // [1, 2, 3, 4, 5]
