/*
Em TypeScript, você pode criar uma lista vinculada usando classes. 
Cada nó da lista é representado por um objeto da classe Node.
Cada nó contém um valor e uma referência para o próximo nó na lista. 
A classe LinkedList é responsável por gerenciar a lista vinculada.


class Node {
    public value: any;
    public next: Node | null;
    
    constructor(value: any, next: Node | null = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    private head: Node | null;
    private tail: Node | null;
    
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    public add(value: any) {
      const node = new Node(value);
      
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail!.next = node;
        this.tail = node;
      }
    }
    
    public remove(value: any) {
      let current = this.head;
      let previous = null;
      
      while (current) {
        if (current.value === value) {
          if (previous) {
            previous.next = current.next;
            if (!current.next) {
              this.tail = previous;
            }
          } else {
            this.head = current.next;
            if (!current.next) {
              this.tail = null;
            }
          }
          return true;
        }
        previous = current;
        current = current.next;
      }
      
      return false;
    }
    
    public toArray() {
      const result = [];
      let current = this.head;
      
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      
      return result;
    }
  }

 Neste exemplo, a classe Node representa um nó da lista vinculada. Ele tem duas propriedades: value, que armazena o valor do nó, e next, que armazena a referência para o próximo nó na lista.

 A classe LinkedList é responsável por gerenciar a lista vinculada. Ela tem duas propriedades: head, que armazena a referência para o primeiro nó da lista, e tail, que armazena a referência para o último nó da lista.

 O método add adiciona um valor ao final da lista vinculada. O método remove remove o primeiro nó com o valor especificado da lista vinculada. O método toArray retorna um array contendo os valores da lista vinculada na ordem em que aparecem na lista.
*/
