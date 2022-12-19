import removeActive from "./removeClasseContent.js"


function showAbout() {
    removeActive()
    document.querySelector('.about').classList.add('active__content')
    document.querySelector('.foto__perfil').attributes.src.value = './assets/images/me.jpg'
}

document.querySelector('[informacao="Sobre"]').addEventListener('click', showAbout)