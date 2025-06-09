let title = document.getElementById("title");
let btnAnimation = document.getElementById("btn");
let tex = document.querySelectorAll('.texth');
let imgH = document.querySelectorAll('.imgh');
let maquina = document.getElementById("maquina");
let nav = document.getElementById("nav");
let navLeft = document.getElementById("nav_uno");
let navRight = document.getElementById("nav_dos");
let contador = 0;
let menu = document.getElementById("menu");
let img = document.querySelectorAll('.img');
let text = document.querySelectorAll('.textn');
let textItemSo = document.querySelector('.text-socio');
let itemNoso = document.querySelector('.item-nosotrosA');
let itemIz = document.querySelector('.text-iz');

const animacionCarga = () => {
    title.classList.add("animation");
    btnAnimation.classList.add("animation");
    tex.forEach(element => {
        element.classList.add("pulsacio");
    });
    imgH.forEach(element2 => {
        element2.classList.add("animation");
    });
    maquina.classList.add("maquina-escribir");
}

btn.addEventListener("click", function btnMenudos() {
    if (contador == 0) {
        nav.classList.remove("active");
        navLeft.classList.add("cortina");
        navRight.classList.add("cortina-rigth");
        navRight.classList.remove("close-cortina-izquierda");
        navLeft.classList.remove("close-cortina-derecha");
        contador = 1;
    } else {
        nav.classList.add("active");
        contador = 0;
    }
});

document.addEventListener("scroll", function() {
    let scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        menu.classList.add("sticky");
    } else if (scroll < 30) {
        menu.classList.remove("sticky");
        animacionCarga();
    }

    if (scroll >= 415) {
        img.forEach(imgs => {
            imgs.classList.add("animation");
        });
        text.forEach(texts => {
            texts.classList.add("animation");
        });
    } else if (scroll < 415) {
        img.forEach(imgs => {
            imgs.classList.remove("animation");
        });
        text.forEach(texts => {
            texts.classList.remove("animation");
        });
    }

    if (scroll >= 1500 || scroll >= 1200) {
        textItemSo.classList.add("text-derecha");
        itemNoso.classList.add("img-nosotros-animation");
        itemIz.classList.add("text-izquierda");
    } else if (scroll < 1500 || scroll < 1200) {
        textItemSo.classList.remove("text-derecha");
        itemNoso.classList.remove("img-nosotros-animation");
        itemIz.classList.remove("text-izquierda");
    }
});

const cerrarLamina = () => {
    if (contador == 1) {
        nav.classList.add("active");
    }
}

function cargarAnimacion(contenedor, url) {
    return lottie.loadAnimation({
        container: contenedor,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: url
    });
}

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

for (var i = 0; i < contenedores.length; i++) {
    cargarAnimacion(contenedores[i], datosAnimaciones[i]);
}

const moverWeb = () => {
    let section2 = document.getElementById('2');
    section2.scrollIntoView({ behavior: 'smooth' });
}
