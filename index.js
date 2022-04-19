const menu_features = document.querySelector(".submenu-features")
const menu_company = document.querySelector(".submenu-company")

const features = document.querySelector(".features")
const company = document.querySelector(".company")
const arrowF = document.querySelector(".arrow-f")
const arrowC = document.querySelector(".arrow-c")

features.addEventListener("mouseenter",()=>{
    arrowF.classList.add("arrow-inverse")
    setTimeout(
        mostrarMenuFeature,100
    );
})
features.addEventListener("mouseleave",()=>{
    arrowF.classList.remove("arrow-inverse")
    setTimeout(
        mostrarMenuFeature,200
    );
})
menu_features.addEventListener("mouseenter",()=>{
    arrowF.classList.add("arrow-inverse")
})
menu_features.addEventListener("mouseleave",()=>{
    arrowF.classList.remove("arrow-inverse")
    setTimeout(
        mostrarMenuFeature,200
    );
})

company.addEventListener("mouseenter",()=>{
    arrowC.classList.add("arrow-inverse")
    setTimeout(
        mostrarMenuCompany,100
    );
})
company.addEventListener("mouseleave",()=>{
    arrowC.classList.remove("arrow-inverse")
    setTimeout(
        mostrarMenuCompany,200
    );
})
menu_company.addEventListener("mouseenter",()=>{
    arrowC.classList.add("arrow-inverse")
})
menu_company.addEventListener("mouseleave",()=>{
    arrowC.classList.remove("arrow-inverse")
    setTimeout(
        mostrarMenuCompany,200
    );
})

function mostrarMenuFeature(){
    menu_features.classList.toggle("show-submenu")
}

function mostrarMenuCompany(){
    menu_company.classList.toggle("show-submenu")
}
/*MOBILE*/
const hamburguer = document.querySelector(".hamburguer")
const menu = document.querySelector(".menu")
let contador = 0
hamburguer.addEventListener("click",()=>{
    menu.style.right="0"
    hamburguer.setAttribute("src","images/icon-close-menu.svg")
    document.body.classList.toggle("after-background")
    contador++
    if(contador%2==0){
        menu.style.right="-100%"
        hamburguer.setAttribute("src","images/icon-menu.svg")
    }
    if(contador%2==1){
        menu.style.right="0"
        hamburguer.setAttribute("src","images/icon-close-menu.svg")
    }
})