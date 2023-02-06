const links = document.querySelectorAll(".link");

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "2px solid red";
}

links.forEach((links) => {
  if (links instanceof HTMLElement) {
    ativarElemento(links);
  }
});
