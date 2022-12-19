import removeActive from "./removeClasseContent.js"


function showPerfil() {
    removeActive()
    document.querySelector('.perfil').classList.add('active__content')
    document.querySelector('.foto__perfil').attributes.src.value = './assets/images/me.jpg'
}

document.querySelector('[informacao="Perfil"]').addEventListener('click', showPerfil)