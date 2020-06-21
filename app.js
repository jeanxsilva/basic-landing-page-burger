const itemsMenu = document.querySelectorAll('.navbar-nav a[href^="#"') 
// Captura todos os elementos que contém na classe (somente os que iniciam com #).

itemsMenu.forEach(item => {
   item.addEventListener('click',scrollToId) // Evento que chama a função (ao click).
});

function scrollToId(event){
   event.preventDefault() // Tira o comportamento padrão do html.
   const element = event.target; // Captura o elemento que invocou o evento.
   const id = element.getAttribute('href') // Captura o valor no atributo href do elemento.
   const section = document.querySelector(id) // Captura a posição da seção relacionada ao id do href.
   pathToSection(section.offsetTop) // Chama a função que faz o efeito.
   
}

function pathToSection(to){
   window.scroll({
      top: to - 45,
      behavior: "smooth"
   });
}