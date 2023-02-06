//Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.

//https://developer.mozilla.org/en-US/docs/Web/API

document.querySelector("video"); // HTMLVideoElement
document.querySelector("img"); // HTMLImageElement

const link1 = document.querySelector("a"); // HTMLAnchorElement
const link2 = document.querySelector("#origamid"); // Element

link1?.href;
link2?.href; // erro no ts

//O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.

const links = document.querySelectorAll(".link");
console.log(links instanceof NodeList);

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  } else {
    console.log(typeof link);
  }
});

// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);

// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter(
  (link) => link instanceof HTMLAnchorElement
);
