//string, number e boolean são tipos básicos do TypeScript (primitivos).

const frases: string = "Front End";
const condis: boolean = preco > 100;

//typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.

const frase = "Front End";
const condi = preco > 100;

if (typeof frase === "string") {
  console.log("frase é string");
}
if (typeof condi === "boolean") {
  console.log("condi é boolean");
}

//Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
