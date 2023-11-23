/*Código para abrir y cerrar la nav bar*/

const burguer = document.querySelector("#icon-burguer");
const nav =  document.querySelector("#nav-id");
const lista = document.querySelector("#lista-desplegable");

burguer.addEventListener("click", () => {
    if(nav.style.display == "none" ){
    nav.style.display = "block";
    }
    else if(nav.style.display == "block"){
        nav.classList.add("animate__slideInDown");
        nav.classList.toggle("animate__slideOutUp");
        lista.classList.add("animate__fadeIn");
        lista.classList.toggle("animate__fadeOut");
    }
    else{
        nav.style.display = "none";
    }
    
});


