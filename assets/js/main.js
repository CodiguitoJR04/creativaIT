//Control de animaciones 10-09-2023
//Salas Reyes Brandon Gustavos
//  ******* creativaIT *********
let title = document.getElementById("title");
let btnAnimation =  document.getElementById("btn");
let tex  = document.querySelectorAll('.texth')
let imgH = document.querySelectorAll('.imgh')
let maquina  = document.getElementById("maquina");


const animacionCarga = () => {
    title.classList.add("animation");
    btnAnimation.classList.add("animation");
    tex.forEach(element => {
        element.classList.add("pulsacio");
    });
    imgH.forEach(element2 => {
        element2.classList.add("animation")
    }); 
    maquina.classList.add("maquina-escribir");
}

//Control de animaciones del menu

let btn =  document.getElementById("btn");
let nav  = document.getElementById("nav");
let navLeft  = document.getElementById("nav_uno")
let navRigth  = document.getElementById("nav_dos");
let contador = 0;

btn.addEventListener("click" ,function btnMenudos (){
    if(contador == 0){
        nav.classList.remove("active");
        navLeft.classList.add("cortina");
        navRigth.classList.add("cortina-rigth");
        navRigth.classList.remove("close-cortina-izquierda");
        navLeft.classList.remove("close-cortina-derecha");
        contador =1;
    }else{
        nav.classList.add("active");
        contador = 0;
    }
});

//Control de animaciones al acer scroll sobre los elementos

let menu = document.getElementById("menu");
let img = document.querySelectorAll('.img');
let text  = document.querySelectorAll('.textn');
let textItemSo = document.querySelector('.text-socio');
let itemNoso = document.querySelector('.item-nosotrosA');
let itemIz = document.querySelector('.text-iz');
document.addEventListener("scroll",function(){
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll >= 100){
        menu.classList.add("sticky");
    }else if(scroll < 30){
        menu.classList.remove("sticky");
        title.classList.add("animation");
        btnAnimation.classList.add("animation");
        tex.forEach(element => {
            element.classList.add("pulsacio");
        });
        imgH.forEach(element2 => {
            element2.classList.add("animation")
        }); 
        maquina.classList.add("maquina-escribir");
    }

    if(scroll >= 415){
        img.forEach(imgs => {
            imgs.classList.add("animation");
        });
        text.forEach(texts =>{ 
            texts.classList.add("animation");
        });
    }else if(scroll < 415){
        img.forEach(imgs => {
            imgs.classList.remove("animation");
        });
        text.forEach(texts =>{ 
            texts.classList.remove("animation");
        });
    }

    if(scroll >= 1500 ||scroll >= 1200 ){
        textItemSo.classList.add("text-derecha");
        itemNoso.classList.add("img-nosotros-animation");
        itemIz.classList.add("text-izquierda");
    }else if(scroll< 1500 || scroll <1200){
        textItemSo.classList.remove("text-derecha");
        itemNoso.classList.remove("img-nosotros-animation");
        itemIz.classList.remove("text-izquierda");
    }
});
//Funcion para cerrar el menu al acer click sobre los links de la web

const cerrarLamina = ()=>{
    if(contador ==1 ){
        nav.classList.add("active");
    }
}



// // A partir de esta linea se empiezan hacer el llamado para las svg con ayuda de la libreria lottie
// var animationContainer = document.getElementById('lottie-container');

//         // Reemplaza la URL con la de tu animación SVG en formato JSON
//         var animationData = 'https://lottie.host/a5b981a6-957a-4c96-8267-636cce0c2b6b/WurE3WhEM6.json';

//         // Configura y carga la animación
//         var animation = lottie.loadAnimation({
//             container: animationContainer,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: animationData
//         });

// var animaion = document.getElementById('animacion-svg');

//         // Reemplaza la URL con la de tu animación SVG en formato JSON
//         var animation = 'https://lottie.host/cb2bfa05-65f0-41b5-91cf-504a81077570/IGV0axnLC2.json';

//         // Configura y carga la animación
//         var animationSVG = lottie.loadAnimation({
//             container: animaion,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: animation
//         });

// var animaion1 = document.getElementById('svg');

//         // Reemplaza la URL con la de tu animación SVG en formato JSON
//         var animation1 ='https://lottie.host/a449c86c-4cf7-475b-b6a5-87d22f4b9f54/PjnA9VZF4s.json';

//         // Configura y carga la animación
//         var animationSVG = lottie.loadAnimation({
//             container: animaion1,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: animation1
//         });

// var animaion2 = document.getElementById('svg-phone');

//         // Reemplaza la URL con la de tu animación SVG en formato JSON
//         var animation2 ='https://lottie.host/1db55ba6-4e76-4bc0-8252-0b39d701d41e/1ILb06ttEE.json';

//         // Configura y carga la animación
//         var animationSVG = lottie.loadAnimation({
//             container: animaion2,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: animation2
//         });

// var animaion3 = document.getElementById('android');

//         // Reemplaza la URL con la de tu animación SVG en formato JSON
//         var animation3 ='https://lottie.host/7aa5c79d-ac3b-499d-b300-2e60525c45e0/2Fce0Ba0kC.json';

//         // Configura y carga la animación
//         var animationSVG = lottie.loadAnimation({
//             container: animaion3,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: animation3
//         });

// var aws = document.getElementById('aws');
//         var awsSVG = 'https://lottie.host/9e486e83-d981-4356-b7d6-141bdc2555b1/AKluJMbjID.json';

//         var anmationAWS = lottie.loadAnimation({
//             container: aws,
//             renderer : 'svg',
//             loop : true,
//             autoplay : true,
//             path: awsSVG
//         });
// var java  = document.getElementById('java');
//         var javaSVG  = 'https://lottie.host/e12f2d57-bcf8-4dc9-a7c0-ecbeea238293/M1nZJ5ztUM.json';
//         var animationJAVA  = lottie.loadAnimation({
//             container : java,
//             renderer : 'svg',
//             loop: true,
//             autoplay:true,
//             path:javaSVG
//         });


// let hacemos  = document.getElementById('hacemos');
//         let hacemosSVG  = 'https://lottie.host/60841d1a-f877-451b-b12d-5d067f92392a/F9054uOvBm.json';
//         let animationHACEMOS =  lottie.loadAnimation({
//             container : hacemos,
//             renderer : 'svg',
//             loop : true,
//             autoplay : true,
//             path : hacemosSVG
//         });


//         let nosotros  = document.getElementById('nosotros');
//         let nosotrosSVG  = 'https://lottie.host/5a2e1942-2f4b-4074-b29e-9408fee73479/vS23WkWoWA.json';
//         let nosotrosANIMATION =  lottie.loadAnimation({
//             container : nosotros,
//             renderer : 'svg',
//             loop : true,
//             autoplay : true,
//             path : nosotrosSVG
//         });

//         let scroll  = document.getElementById('scroll');
//         let scrollSVG  = 'https://lottie.host/234cb2b4-5f44-4eb3-a716-3fa232ad2fe5/pmNIcubJ2h.json';
//         let scrollAnimation =  lottie.loadAnimation({
//             container : scroll,
//             renderer : 'svg',
//             loop : true,
//             autoplay : true,
//             path : scrollSVG
//         });

function cargarAnimacion(contenedor, url) {
    return lottie.loadAnimation({
        container: contenedor,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: url
    });
}

// Definir arrays para contenedores y datos de animaciones
var contenedores = [
    document.getElementById('lottie-container'),
    document.getElementById('animacion-svg'),
    document.getElementById('svg'),
    document.getElementById('svg-phone'),
    document.getElementById('android'),
    document.getElementById('aws'),
    document.getElementById('java'),
    document.getElementById('hacemos'),
    document.getElementById('nosotros'),
    document.getElementById('scroll')
];

var datosAnimaciones = [
    'https://lottie.host/a5b981a6-957a-4c96-8267-636cce0c2b6b/WurE3WhEM6.json',
    'https://lottie.host/cb2bfa05-65f0-41b5-91cf-504a81077570/IGV0axnLC2.json',
    'https://lottie.host/a449c86c-4cf7-475b-b6a5-87d22f4b9f54/PjnA9VZF4s.json',
    'https://lottie.host/1db55ba6-4e76-4bc0-8252-0b39d701d41e/1ILb06ttEE.json',
    'https://lottie.host/7aa5c79d-ac3b-499d-b300-2e60525c45e0/2Fce0Ba0kC.json',
    'https://lottie.host/9e486e83-d981-4356-b7d6-141bdc2555b1/AKluJMbjID.json',
    'https://lottie.host/e12f2d57-bcf8-4dc9-a7c0-ecbeea238293/M1nZJ5ztUM.json',
    'https://lottie.host/60841d1a-f877-451b-b12d-5d067f92392a/F9054uOvBm.json',
    'https://lottie.host/5a2e1942-2f4b-4074-b29e-9408fee73479/vS23WkWoWA.json',
    'https://lottie.host/234cb2b4-5f44-4eb3-a716-3fa232ad2fe5/pmNIcubJ2h.json'
];

// Cargar las animaciones dinámicamente
for (var i = 0; i < contenedores.length; i++) {
    cargarAnimacion(contenedores[i], datosAnimaciones[i]);
}



const moverWeb  = () => {
    let section2  = document.getElementById('2');
    section2.scrollIntoView({ behavior: 'smooth' });
}