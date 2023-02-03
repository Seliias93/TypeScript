//Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];

const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, "Taxas", 40, "Produto", 3, 30];

function maiorQue10(data: number[]) {
  return data.filter((n) => n > 10);
}
maiorQue10(numeros);

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "number");
}
filtrarValores(valores);

const dados: (string | number)[][] = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120],
];

//Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.

const numero = [10, 30, 40, 5, 3, 30];

function maiorQue15(data: Array<number>) {
  return data.filter((n) => n > 15);
}

//Exercício

//Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

//Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos) {}
