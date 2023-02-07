//O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento).

//O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.

function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard("Origamid");
typeGuard(200);
typeGuard(document.body);

//O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.

const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("Sim");
}

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

function handleProduto(data: Produto) {
  if ("preco" in data) {
    document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
  }
}

fetchProduto();
