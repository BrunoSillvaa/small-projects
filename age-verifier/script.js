// Variaveis

var verifie = document.querySelector('input#verifie')
var reset = document.querySelector('input#reset')

// Adiciona os verificadores de Evento

verifie.addEventListener('click', ageVerifie)
reset.addEventListener('click', inputsReset)

// Funções

function ageVerifie() {
    let localdate = new Date()
    let localyear = localdate.getFullYear()
    let year = document.querySelector('input#year')
    let ansewer = document.querySelector('div#ansewer')
    
    // Verifica se o ano está correto
    if (year.value.length == 0 || Number(year.value) > localyear) {
        window.alert('Dados inválidos, por favor tente novamente!')
    } else {

        let sex = document.getElementsByName('sex')
        let age = localyear - Number(year.value)

        if (sex[0].checked) {
            ansewer.innerHTML = `Você é um Homem de ${age} anos`
        } else if (sex[1].checked) {
            ansewer.innerHTML = `Você é uma Mulher de ${age} anos`
        }
    }
}

function inputsReset() {
    let year = document.querySelector('input#year')
    let ansewer = document.querySelector('div#ansewer')

    year.value = null
    ansewer.innerHTML = null
}
