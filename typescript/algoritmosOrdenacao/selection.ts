/*
A ordenação por seleção é um algoritmo de classificação simples que encontra o menor elemento em uma 
lista não ordenada e o move para o início da lista. 
O processo é repetido para os elementos restantes, um de cada vez, 
até que a lista esteja completamente ordenada.
*/ 

function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
  
/*
  Nesta implementação, o método selectionSort recebe um array de números e retorna o array ordenado. 
  O laço externo percorre a lista até o penúltimo elemento (índice arr.length - 1), 
  porque o último elemento é automaticamente ordenado quando todos os outros elementos são ordenados. 
  A variável minIndex contém o índice do menor elemento encontrado na lista não ordenada.
  O laço interno percorre os elementos restantes da lista não ordenada e encontra o menor elemento. 
  Se o menor elemento encontrado for menor do que o elemento atualmente selecionado como o menor, 
  o índice do menor elemento é atualizado. No final do laço interno, o menor elemento é trocado com o elemento 
  no início da lista não ordenada.  
*/  

// const arr = [5, 3, 1, 4, 2];
// const sortedArr = selectionSort(arr);
// console.log(sortedArr); // [1, 2, 3, 4, 5]

