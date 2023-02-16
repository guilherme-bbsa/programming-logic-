/*
uma pilha é uma estrutura de dados que funciona como uma coleção de elementos onde o último elemento adicionado 
é o primeiro a ser removido. As operações básicas em uma pilha são a adição de um elemento no topo 
da pilha (conhecida como "push") e a remoção do elemento no topo da pilha (conhecida como "pop").
*/


class pilha {
    private elements: any[] = [];
  
    public push(element: any): void {
      this.elements.push(element);
    }
  
    public pop(): any {
      return this.elements.pop();
    }
  
    public peek(): any {
      return this.elements[this.elements.length - 1];
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

Nesta implementação, a classe Stack tem um array chamado elements que é usado para armazenar os elementos da pilha.

O método push adiciona um elemento no topo da pilha. O método pop remove e retorna o elemento no topo da pilha. 
O método peek retorna o elemento no topo da pilha sem removê-lo. O método isEmpty retorna true se a pilha estiver vazia, e false caso contrário. O método size retorna o número de elementos na pilha. 
O método toArray retorna um array contendo os elementos da pilha na ordem em que aparecem na pilha.
*/