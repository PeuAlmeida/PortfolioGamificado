import removeActive from "./removeClasseContent.js"

const foto = document.querySelector('.foto__perfil').attributes.src

function showNodeJS() {
    removeActive()
    document.querySelector('.nodeJs').classList.add('active__content')
    foto.value = './assets/images/fotos/nodejs-original 1.png'
}

document.querySelector('[informacao="NodeJS"]').addEventListener('click', showNodeJS)


function showJavascript() {
    removeActive()
    document.querySelector('.javascript').classList.add('active__content')
    foto.value = './assets/images/fotos/javascript-original 1.png'
}

document.querySelector('[informacao="Javascript"]').addEventListener('click', showJavascript)


function showReact() {
    removeActive()
    document.querySelector('.react').classList.add('active__content')
    foto.value = './assets/images/fotos/react-original 1.png'
}

document.querySelector('[informacao="React"]').addEventListener('click', showReact)


function showCSS() {
    removeActive()
    document.querySelector('.css').classList.add('active__content')
    foto.value = './assets/images/fotos/css3-original 1.png'
}

document.querySelector('[informacao="CSS"]').addEventListener('click', showCSS)


function showHtml() {
    removeActive()
    document.querySelector('.html').classList.add('active__content')
    foto.value = './assets/images/fotos/html5-original 1.png'
}

document.querySelector('[informacao="Html"]').addEventListener('click', showHtml)


function showTailwind() {
    removeActive()
    document.querySelector('.tailwind').classList.add('active__content')
    foto.value = './assets/images/fotos/tailwindcss-plain 1.png'
}

document.querySelector('[informacao="Tailwind"]').addEventListener('click', showTailwind)


function showTypescript() {
    removeActive()
    document.querySelector('.typescript').classList.add('active__content')
    foto.value = './assets/images/fotos/typescript-original 1.png'
}

document.querySelector('[informacao="Typescript"]').addEventListener('click', showTypescript)


function showNpm() {
    removeActive()
    document.querySelector('.npm').classList.add('active__content')
    foto.value = './assets/images/fotos/npm-original-wordmark 1.png'
}

document.querySelector('[informacao="NPM"]').addEventListener('click', showNpm)


function showNext() {
    removeActive()
    document.querySelector('.nextJs').classList.add('active__content')
    foto.value = './assets/images/fotos/next-original 1.png'
}

document.querySelector('[informacao="NextJs"]').addEventListener('click', showNext)

