/*
A ordenação por bolha é um algoritmo de classificação simples que percorre a lista várias vezes, 
comparando pares adjacentes de elementos e 
trocando-os se estiverem na ordem errada. 

*/

function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  /*
Nesta implementação, o método bubbleSort recebe um array de números e retorna o array ordenado. 
O laço externo percorre a lista várias vezes, uma para cada elemento, enquanto o laço interno percorre a lista de 0 
a n - i - 1, comparando cada par de elementos adjacentes. 
Se um par de elementos adjacentes estiver fora de ordem, seus valores são trocados.

A ordenação por bolha é um dos algoritmos mais simples de classificação, 
mas pode ser ineficiente para listas grandes ou desordenadas. 
O pior caso de tempo de execução é O(n²), onde n é o número de elementos na lista. 
No entanto, a ordenação por bolha pode ser útil para pequenas listas ou listas quase ordenadas, 
onde a complexidade de tempo pode não ser um problema.

*/