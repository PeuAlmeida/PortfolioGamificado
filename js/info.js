function hover(elements) {
    const informacao = elements.attributes.informacao.value
    document.querySelector('.tech__title--text').innerHTML = informacao
}

function nextPage() {
    const addActive = document.querySelector('.next__info')
    const removeActive = document.querySelector('.prev__info')
    removeActive.classList.remove('active')
    addActive.classList.add('active')
}

function prevPage() {
    const addActive = document.querySelector('.prev__info')
    const removeActive = document.querySelector('.next__info')

    removeActive.classList.remove('active')
    addActive.classList.add('active')
}




