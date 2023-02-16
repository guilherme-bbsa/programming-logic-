/*
uma árvore é uma estrutura de dados não linear que consiste em um conjunto de nós conectados por arestas. 
Cada nó da árvore pode ter zero ou mais nós filhos, e um único nó é definido como a raiz da árvore.
Além disso, cada nó, exceto a raiz, tem um único nó pai. 
As árvores são amplamente usadas para representar hierarquias, como a estrutura de arquivos de um sistema operacional ou a estrutura de um documento HTML.

Em TypeScript, podemos representar uma árvore usando uma classe. 
Cada instância da classe representa um nó na árvore e possui uma referência para seus nós filhos e
para seu nó pai. Aqui está um exemplo de implementação de uma árvore binária em TypeScript:


class Node {
    public left: Node | null = null;
    public right: Node | null = null;
    constructor(public value: number) {}
  }
  
  class BinaryTree {
    public root: Node | null = null;
  
    public add(value: number): void {
      const node = new Node(value);
      if (!this.root) {
        this.root = node;
      } else {
        this.addNode(node, this.root);
      }
    }
  
    private addNode(node: Node, current: Node): void {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
        } else {
          this.addNode(node, current.left);
        }
      } else {
        if (!current.right) {
          current.right = node;
        } else {
          this.addNode(node, current.right);
        }
      }
    }
  
    public find(value: number): Node | null {
      let current = this.root;
      while (current) {
        if (value === current.value) {
          return current;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  }

Nesta implementação, a classe Node representa um nó na árvore binária e 
contém uma referência para seus nós filhos esquerdo e direito. 
A classe BinaryTree representa a árvore binária e contém uma referência para sua raiz.

O método add adiciona um nó à árvore. 
Se a árvore estiver vazia, o nó adicionado se torna a raiz da árvore. 
Caso contrário, o método addNode é chamado para encontrar a posição correta para adicionar o nó na árvore.

O método addNode percorre a árvore recursivamente para encontrar o lugar correto para inserir o novo nó. 
Se o valor do novo nó for menor do que o valor do nó atual, ele é adicionado à subárvore esquerda. 
Caso contrário, ele é adicionado à subárvore direita.

O método find encontra um nó na árvore com um determinado valor. 
Ele começa na raiz da árvore e percorre a subárvore esquerda ou direita, 
dependendo do valor do nó atual e do valor desejado.


*/
