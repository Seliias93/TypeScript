//Passamos o evento como uma string e uma função de callback no método addEventListener. A função de callback possui um parâmetro que faz referência ao evento executado.

const buttn = document.querySelector("button");

function handleClick(event: MouseEvent) {
  console.log(event.pageX);
}

button?.addEventListener("click", handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener("scroll", handleScroll);

//Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event.

function ativarMenu(event: Event) {
  console.log(event.type);
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);

//Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.

function ativarMenus(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this.innerText);
}

const buttsn = document.querySelector("buttsn");
buttsn?.addEventListener("click", ativarMenu);

//O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento.

function ativarMenu4(event: Event) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    elemento.style.background = "red";
  }
}

const buttons = document.querySelector("buttons");
buttons?.addEventListener("click", ativarMenu);

window.addEventListener("keydown", ativarMenu);
