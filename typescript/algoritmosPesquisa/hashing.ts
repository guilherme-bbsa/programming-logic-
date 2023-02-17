// Hashing é uma técnica para armazenar e recuperar dados de forma rápida em uma tabela de dispersão

class HashTable {
    private table: any[];
  
    constructor(size: number) {
      this.table = new Array(size);
    }
  
    private hash(key: string): number {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    public put(key: string, value: any): void {
      const index = this.hash(key);
      if (this.table[index] === undefined) {
        this.table[index] = [[key, value]];
      } else {
        let inserted = false;
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          this.table[index].push([key, value]);
        }
      }
    }
  
    public get(key: string): any {
      const index = this.hash(key);
      if (this.table[index] === undefined) {
        return undefined;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return undefined;
    }
  
    public remove(key: string): void {
      const index = this.hash(key);
      if (this.table[index] === undefined) {
        return;
      }
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          return;
        }
      }
    }
  }
  

// Nesta implementação, a classe HashTable representa uma tabela de dispersão que armazena pares chave-valor. 
// A tabela é inicializada com um tamanho definido pelo usuário e é armazenada em um array. 
// A função de hash é usada para mapear uma chave para um índice no array. 
// Neste exemplo, a função de hash simplesmente soma os valores dos códigos ASCII de cada caractere na chave e 
// retorna o resultado módulo o tamanho da tabela.

// Os métodos put, get e remove são usados para inserir, recuperar e remover pares chave-valor da tabela, 
// respectivamente. O método put insere um novo par chave-valor na tabela. 
// Se a entrada correspondente à chave já existe na tabela, o valor existente é atualizado. 
// O método get retorna o valor correspondente a uma chave dada, ou undefined se a chave não existir na tabela. 
// O método remove remove a entrada correspondente a uma chave dada.
const table = new HashTable(10);
table.put("apple", 1);
table.put("banana", 2);
table.put("cherry", 3);

console.log(table.get("apple")); // 1
console.log(table.get("banana")); // 2
console.log(table.get("cherry")); // 3

table.remove("banana");
console.log(table.get("banana")); //
