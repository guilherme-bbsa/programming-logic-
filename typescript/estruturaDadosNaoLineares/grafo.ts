/*
Em TypeScript, um grafo é uma estrutura de dados que consiste em um conjunto de vértices (também chamados de nós) e 
um conjunto de arestas que conectam esses vértices. Os grafos são amplamente utilizados em muitas aplicações, 
como redes de computadores, rotas de transporte, redes sociais e muitas outras.

Em TypeScript, podemos representar um grafo usando uma classe Graph, 
que mantém uma lista de seus vértices e uma lista de suas arestas. 
Cada vértice é representado por uma classe Vertex, 
que contém uma lista de suas arestas adjacentes. 
Cada aresta é representada por uma classe Edge, que contém referências para seus vértices de origem e destino. 
Aqui está um exemplo de implementação de um grafo direcionado em TypeScript:

*/
class Vertex {
    public edges: Edge[] = [];
  
    constructor(public label: string) {}
  
    public addEdge(edge: Edge): void {
      this.edges.push(edge);
    }
  }
  
  class Edge {
    constructor(public start: Vertex, public end: Vertex, public weight: number = 0) {}
  
    public toString(): string {
      return `${this.start.label} -> ${this.end.label}`;
    }
  }
  
  class Graph {
    public vertices: Vertex[] = [];
    public edges: Edge[] = [];
  
    public addVertex(label: string): Vertex {
      const vertex = new Vertex(label);
      this.vertices.push(vertex);
      return vertex;
    }
  
    public addEdge(start: Vertex, end: Vertex, weight: number = 0): void {
      const edge = new Edge(start, end, weight);
      start.addEdge(edge);
      this.edges.push(edge);
    }
  }
  

  /*
Nesta implementação, a classe Vertex representa um vértice no grafo e contém uma lista de suas arestas adjacentes. 
A classe Edge representa uma aresta no grafo e contém referências para seus vértices de origem e destino.

A classe Graph representa o grafo e mantém uma lista de seus vértices e uma lista de suas arestas.
O método addVertex adiciona um vértice ao grafo e retorna a instância do vértice. 
O método addEdge adiciona uma aresta ao grafo, criando uma nova instância de Edge e adicionando-a à 
lista de arestas do grafo e à lista de arestas do vértice de origem.

*/

const graph = new Graph();
const v1 = graph.addVertex('A');
const v2 = graph.addVertex('B');
const v3 = graph.addVertex('C');

graph.addEdge(v1, v2);
graph.addEdge(v2, v3);
graph.addEdge(v3, v1);

//Este exemplo cria um grafo com três vértices (rotulados A, B e C) e três arestas que conectam os vértices em um ciclo.

