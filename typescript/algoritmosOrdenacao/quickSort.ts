/*
O Quick Sort é um algoritmo de ordenação eficiente que segue a abordagem "dividir e conquistar". 
Ele escolhe um elemento, chamado pivô, e rearranja os elementos da lista de forma que todos os elementos menores que 
o pivô fiquem à esquerda do pivô e todos os elementos maiores que o pivô fiquem à direita. 
Em seguida, ele recursivamente ordena a sublista à esquerda do pivô e a sublista à direita do pivô. 

*/

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (arr.length > 1) {
      const index = partition(arr, left, right);
  
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
  
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
  
    return arr;
  }
  
  function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[Math.floor((right + left) / 2)];
  
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
  
      while (arr[right] > pivot) {
        right--;
      }
  
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
  
    return left;
  }
  

  /*
Nesta implementação, o método quickSort recebe um array de números, o índice esquerdo e o índice direito e 
retorna o array ordenado. O método começa verificando se o array tem mais de um elemento e, 
em seguida, chama o método partition para dividir o array em duas partições com base no pivô. 
O método é chamado recursivamente para classificar cada partição, se houver mais de um elemento.

O método partition recebe o array, o índice esquerdo e o índice direito. 
Ele seleciona um elemento como pivô, geralmente o elemento do meio, e divide o array em 
duas partições: uma com elementos menores que o pivô e outra com elementos maiores que o pivô. 
Ele compara os elementos à esquerda do pivô com o pivô e os elementos à direita do pivô com o pivô e, 
em seguida, troca os elementos que estão na partição errada. O processo é repetido até que a partição esteja 
totalmente classificada.
*/