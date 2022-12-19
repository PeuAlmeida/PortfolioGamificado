import removeActive from "./removeClasseContent.js"

function showProjects() {
    removeActive()
    document.querySelector('.projects').classList.add('active__content')
    document.querySelector('.foto__perfil').attributes.src.value = './assets/images/me.jpg'
}

document.querySelector('[informacao="Projetos"]').addEventListener('click', showProjects)