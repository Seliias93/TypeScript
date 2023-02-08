//As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.

// f HTMLElement()
console.log(document.constructor);

class Produto {
  tipo = "produto";
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const livro = new Produto("O Senhor dos Anéis");
