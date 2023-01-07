// Variaveis
const start = document.querySelector('input#start')
const step = document.querySelector('input#step')
const end = document.querySelector('input#end')

var count = document.querySelector('input#count')
var reset = document.querySelector('input#reset')
var result = document.querySelector('div#result')

// Adiciona os verificadores de Evento

count.addEventListener('click', numberCount)
reset.addEventListener('click', numbersReset)

// Funcoes

function numberCount() {

    let start = Number(document.querySelector('input#start').value)
    let step = Number(document.querySelector('input#step').value)
    let end = Number(document.querySelector('input#end').value)

    // Reseta a contagem
    result.innerText = null

    if (step == 0) {
        window.alert('Passo Inválido. Por favor tente novamente.')
    } else if (start.lenght == 0 || step.lenght == 0 || end.lenght == 0) {
        window.alert('Dados Inválidos. Por favor tente novamente.')
    } else if (start <= end) {
        for (start; start <= end; start += step) {
            result.innerText += ` ${start}`
        }
    } else if (start >= end) {
        for (start; start >= end; start -= step) {
        result.innerText += ` ${start}`
        }
    }  

}

function numbersReset() {
    result.innerText = '0'
    
    start.value = null
    step.value = null
    end.value = null
}

console.log(start.value)