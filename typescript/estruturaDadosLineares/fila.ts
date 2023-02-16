/*
uma fila é uma estrutura de dados que funciona como uma coleção de elementos onde 
o primeiro elemento adicionado é o primeiro a ser removido. 
As operações básicas em uma fila são a adição de um elemento no final da fila (conhecida como "enqueue") e 
a remoção do elemento no início da fila (conhecida como "dequeue").
*/

class Queue {
    private elements: any[] = [];
  
    public enqueue(element: any): void {
      this.elements.push(element);
    }
  
    public dequeue(): any {
      return this.elements.shift();
    }
  
    public peek(): any {
      return this.elements[0];
    }
  
    public isEmpty(): boolean {
      return this.elements.length === 0;
    }
  
    public size(): number {
      return this.elements.length;
    }
  
    public toArray(): any[] {
      return [...this.elements];
    }
  }
  

  /*
Nesta implementação, a classe Queue tem um array chamado elements que é usado para armazenar os elementos da fila.

O método enqueue adiciona um elemento no final da fila. 
O método dequeue remove e retorna o elemento no início da fila. 
O método peek retorna o elemento no início da fila sem removê-lo. 
O método isEmpty retorna true se a fila estiver vazia, e false caso contrário. 
O método size retorna o número de elementos na fila. O método toArray retorna um array contendo os elementos da fila na ordem em que aparecem na fila.
*/


//criando uma nova fila
const fila = new Queue();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
