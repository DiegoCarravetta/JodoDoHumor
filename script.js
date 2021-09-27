const elementoNome = document.querySelector('#nome');
const elementoDescricao = document.querySelector('#descricao');
const elementoForma = document.querySelector('#eevolutions');
const elementoImgDescricao = document.querySelector('#pokemonEevee');
let elementoBtn = document.querySelector('#alterarDescricao')

elementoBtn.addEventListener('click', () => {
    if (elementoBtn.value == 'primeiraDescricao') {
        elementoImgDescricao.src = 'Media/Eeveelutions2.png'
        elementoForma.src = 'Media/Vaporeon.png'
        elementoNome.innerText = 'Vaporeon'
        elementoDescricao.innerText = 'Lisa como a água'
        elementoBtn.value = 'segundaDescricao'
    } else if (elementoBtn.value == 'segundaDescricao') {
        elementoImgDescricao.src = 'Media/Eeveelutions2.png'
        elementoForma.src = 'Media/Jolteon.png'
        elementoNome.innerText = 'Jolteon'
        elementoDescricao.innerText = 'Todo elétrico'
        elementoBtn.value = 'terceiraDescricao'
    } else if (elementoBtn.value == 'terceiraDescricao') {
        elementoImgDescricao.src = 'Media/Eeveelutions2.png'
        elementoForma.src = 'Media/Flareon.png'
        elementoNome.innerText = 'Flareon'
        elementoDescricao.innerText = 'Pegando Fogo'
        elementoBtn.value = 'quartaDescricao'
    } else {
        elementoImgDescricao.src = 'Media/eevee.png'
        elementoForma.src = 'Media/Eeveelutions.png'
        elementoNome.innerText = 'Eevee'
        elementoDescricao.innerText = 'Toda idecisa que vai ser hoje'
        elementoBtn.value = 'primeiraDescricao'
    }

})