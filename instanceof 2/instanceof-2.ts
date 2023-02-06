//Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.

class Produtos {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}
const livros = new Produto("A Guerra dos Tronos", 200);

//Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).

class Livros1 {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class game {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1);
  }
  return null;
}

const Produto1 = buscarProduto("O Hobbit");

//O instanceof verifica se a função construtora herda de outra (extends).

class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class livro2 extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo("Dark Souls", 1);
  }
  return null;
}

const produto1 = buscarProduto("O Hobbit");
const produto3 = buscarProduto("Dark Souls");

if (produto1 instanceof Produto) {
  produto1.nome;
}

//O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.

interface Produto2 {
  nome: string;
}

// Erro
if (jogo instanceof Produto) {
}
