export default function removeActive() {
    const classeAtiva = document.querySelectorAll('.content__info--principal') 
    classeAtiva.forEach(classes => {
        classes.classList.forEach(classe => {
            if(classe === 'active__content') {
                classes.classList.remove('active__content')
            }
        })
    })
}