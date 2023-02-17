/*
A pesquisa binária é um algoritmo eficiente de pesquisa em que um elemento é procurado em uma lista ordenada, 
dividindo repetidamente a lista ao meio e determinando em qual metade o elemento pode estar presente.


*/

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/*

Nesta implementação, o método binarySearch recebe um array de números e o valor de destino e retorna 
o índice do valor de destino no array ou -1 se o valor de destino não for encontrado. 
O método começa inicializando os índices esquerdo e direito e, em seguida, 
divide o array ao meio usando o índice médio. 
Se o valor médio for igual ao valor de destino, o método retorna o índice médio. 
Se o valor médio for menor que o valor de destino, o método atualiza o índice esquerdo para o índice médio + 1. 
Se o valor médio for maior que o valor de destino, o método atualiza o índice direito para o índice médio - 1. 
O processo é repetido até que o valor de destino seja encontrado ou a lista seja completamente percorrida.

Por exemplo, para pesquisar um elemento em um array de números usando a pesquisa binária, você pode fazer:
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = binarySearch(arr, target);
console.log(index); // 4
