/*
O Merge Sort é um algoritmo de ordenação eficiente que segue a abordagem "dividir e conquistar". 
Ele divide a lista em duas metades, classifica cada metade e, em seguida, 
mescla as duas metades classificadas em uma única lista classificada. 

*/
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  

  /*
Nesta implementação, o método mergeSort recebe um array de números e retorna o array ordenado. 
O método começa por verificar se o array tem um único elemento ou nenhum, o que significa que ele já está ordenado. 
Em seguida, ele divide o array em duas metades, chamando recursivamente o mergeSort para classificar cada metade e,
depois, mescla as duas metades classificadas usando o método merge.

O método merge recebe duas listas classificadas e as mescla em uma única lista classificada. 
Ele cria uma lista vazia result e, em seguida, compara os primeiros elementos de cada lista e 
adiciona o menor elemento ao result. O processo é repetido até que uma das listas esteja esgotada.
Os elementos restantes na lista não esgotada são adicionados ao result.

*/