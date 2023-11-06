/*Código para abrir y cerrar la nav bar*/

const burguer = document.querySelector("#icon-burguer");
const nav =  document.querySelector("#nav-id");

burguer.addEventListener("click", () => {
    if(nav.style.display == "none"){
    nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
        
    }
});

