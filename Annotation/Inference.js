"use strict";
// Annotation (anotação)
//Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).
const produto = "Livro";
let preco = 200;
const carro = {
    marca: "Audi",
    portas: 5,
};
//Inference (Inferência)
//O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.
const produto2 = "Livro";
let preco2 = 200;
const carro2 = {
    marca: "Audi",
    portas: 5,
};
const barato = preco2 < 200 ? true : "produto caro2";
//Funções
//As anotações serão necessárias quando lidamos com funções
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//Exercício 1
//Conserte a função com TypeScript
function normalizarTexto(texto) {
    return texto.trims().toLowercase();
}
//Exercício 2
//Conserte as funções com TypeScript
const input = document.querySelector("input");
const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);
function calcularGanho(value) {
    const p = document.querySelector("p");
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    const value = Number(input.value);
    localStorage.setItem("total", value);
    calcularGanho(value);
}
input.addEventListener("keyup", totalMudou);
