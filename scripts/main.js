/*Código para abrir y cerrar la nav bar*/

const burguer = document.querySelector("#icon-burguer");
const nav =  document.querySelector("#nav-id");
const lista = document.querySelector("#lista-desplegable");
const  preguntas = document.querySelector("#preguntas1");
const preguntas2 = document.querySelector("#preguntas2");
const preguntas3 = document.querySelector("#preguntas3");
const preguntas4 = document.querySelector("#preguntas4");
const preguntas5 = document.querySelector("#preguntas5");
const preguntas6 = document.querySelector("#preguntas6");
const preguntas7 = document.querySelector("#preguntas7");
const preguntas8 = document.querySelector("#preguntas8");
const preguntas9 = document.querySelector("#preguntas9");
const preguntas10 = document.querySelector("#preguntas10");
const complemento =document.querySelector("#complemento1");
const complemento2 = document.querySelector("#complemento2");
const complemento3 = document.querySelector("#complemento3");
const complemento4 = document.querySelector("#complemento4");
const complemento5 = document.querySelector("#complemento5");
const complemento6 = document.querySelector("#complemento6");
const complemento7 = document.querySelector("#complemento7");
const complemento8 = document.querySelector("#complemento8");
const complemento9 = document.querySelector("#complemento9");
const complemento10 = document.querySelector("#complemento10");
const flechitaabajo1 = document.querySelector("#flechaabajo1");
const flechitaabajo2 = document.querySelector("#flechaabajo2");
const flechitaabajo3 = document.querySelector("#flechaabajo3");
const flechitaabajo4 = document.querySelector("#flechaabajo4");
const flechitaabajo5 = document.querySelector("#flechaabajo5");
const flechitaabajo6 = document.querySelector("#flechaabajo6");
const flechitaabajo7 = document.querySelector("#flechaabajo7");
const flechitaabajo8 = document.querySelector("#flechaabajo8");
const flechitaabajo9 = document.querySelector("#flechaabajo9");
const flechitaabajo10 = document.querySelector("#flechaabajo10");
const flechitaarriba1 = document.querySelector("#flechaarriba1");
const flechitaarriba2 = document.querySelector("#flechaarriba2");
const flechitaarriba3 = document.querySelector("#flechaarriba3");
const flechitaarriba4 = document.querySelector("#flechaarriba4");
const flechitaarriba5 = document.querySelector("#flechaarriba5");
const flechitaarriba6 = document.querySelector("#flechaarriba6");
const flechitaarriba7 = document.querySelector("#flechaarriba7");
const flechitaarriba8 = document.querySelector("#flechaarriba8");
const flechitaarriba9 = document.querySelector("#flechaarriba9");
const flechitaarriba10 = document.querySelector("#flechaarriba10");

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

preguntas.addEventListener("click", () => {
    
    if (complemento.style.display === "none"){
        complemento.style.display = "block";
        preguntas.style.borderBottom = "0px solid ";
        preguntas.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo1.style.display = "none";
        flechitaarriba1.style.display = "block";
    }   else {
        complemento.style.display =   "none";
        preguntas.style.borderBottom = "1px solid #30475E";
        preguntas.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo1.style.display = "block";
        flechitaarriba1.style.display = "none";
    }
});

preguntas2.addEventListener("click", () => {
    
    if (complemento2.style.display === "none"){
        complemento2.style.display = "block";
        preguntas2.style.borderBottom = "0px solid";
        preguntas2.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo2.style.display = "none";
        flechitaarriba2.style.display = "block";
    }   else {
        complemento2.style.display =   "none";
        preguntas2.style.borderBottom = "2px solid #1A8ACA";
        preguntas2.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo2.style.display = "block";
        flechitaarriba2.style.display = "none";
    }
});

preguntas3.addEventListener("click", () => {
    
    if (complemento3.style.display === "none"){
        complemento3.style.display = "block";
        preguntas3.style.borderBottom = "0px solid ";
        preguntas3.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo3.style.display = "none";
        flechitaarriba3.style.display = "block";
    }   else {
        complemento3.style.display =   "none";
        preguntas3.style.borderBottom = "2px solid #1A8ACA";
        preguntas3.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo3.style.display = "block";
        flechitaarriba3.style.display = "none";
    }
});

preguntas4.addEventListener("click", () => {
    
    if (complemento4.style.display === "none"){
        complemento4.style.display = "block";
        preguntas4.style.borderBottom = "0px solid ";
        preguntas4.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo4.style.display = "none";
        flechitaarriba4.style.display = "block";
    }   else {
        complemento4.style.display =   "none";
        preguntas4.style.borderBottom = "2px solid #1A8ACA";
        preguntas4.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo4.style.display = "block";
        flechitaarriba4.style.display = "none";
    }
});

preguntas5.addEventListener("click", () => {
    
    if (complemento5.style.display === "none"){
        complemento5.style.display = "block";
        preguntas5.style.borderBottom = "0px solid ";
        preguntas5.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo5.style.display = "none";
        flechitaarriba5.style.display = "block";
    }   else {
        complemento5.style.display =   "none";
        preguntas5.style.borderBottom = "2px solid #1A8ACA";
        preguntas5.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo5.style.display = "block";
        flechitaarriba5.style.display = "none";
    }
});

preguntas6.addEventListener("click", () => {
    
    if (complemento6.style.display === "none"){
        complemento6.style.display = "block";
        preguntas6.style.borderBottom = "0px solid ";
        preguntas6.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo6.style.display = "none";
        flechitaarriba6.style.display = "block";
    }   else {
        complemento6.style.display =   "none";
        preguntas6.style.borderBottom = "2px solid #1A8ACA";
        preguntas6.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo6.style.display = "block";
        flechitaarriba6.style.display = "none";
    }
});

preguntas7.addEventListener("click", () => {
    
    if (complemento7.style.display === "none"){
        complemento7.style.display = "block";
        preguntas7.style.borderBottom = "0px solid ";
        preguntas7.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo7.style.display = "none";
        flechitaarriba7.style.display = "block";
    }   else {
        complemento7.style.display =   "none";
        preguntas7.style.borderBottom = "2px solid #1A8ACA";
        preguntas7.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo7.style.display = "block";
        flechitaarriba7.style.display = "none";
    }
});

preguntas8.addEventListener("click", () => {
    
    if (complemento8.style.display === "none"){
        complemento8.style.display = "block";
        preguntas8.style.borderBottom = "0px solid ";
        preguntas8.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo8.style.display = "none";
        flechitaarriba8.style.display = "block";
    }   else {
        complemento8.style.display =   "none";
        preguntas8.style.borderBottom = "2px solid #1A8ACA";
        preguntas8.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo8.style.display = "block";
        flechitaarriba8.style.display = "none";
    }
});

preguntas9.addEventListener("click", () => {
    
    if (complemento9.style.display === "none"){
        complemento9.style.display = "block";
        preguntas9.style.borderBottom = "0px solid ";
        preguntas9.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo9.style.display = "none";
        flechitaarriba9.style.display = "block";
    }   else {
        complemento9.style.display =   "none";
        preguntas9.style.borderBottom = "2px solid #1A8ACA";
        preguntas9.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo9.style.display = "block";
        flechitaarriba9.style.display = "none";
    }
});

preguntas10.addEventListener("click", () => {
    
    if (complemento10.style.display === "none"){
        complemento10.style.display = "block";
        preguntas10.style.borderBottom = "0px solid ";
        preguntas10.style.borderRadius = "10px 10px 0px 0px";
        flechitaabajo10.style.display = "none";
        flechitaarriba10.style.display = "block";
    }   else {
        complemento10.style.display =   "none";
        preguntas10.style.borderBottom = "2px solid #1A8ACA";
        preguntas10.style.borderRadius = "10px 10px 10px 10px";
        flechitaabajo10.style.display = "block";
        flechitaarriba10.style.display = "none";
    }
});


