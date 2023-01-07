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

    let array = []

    // Reseta a contagem
    result.innerText = null

    // Verifica se os inputs estão corretos
    if (start.lenght == 0 || step.lenght == 0 || end.lenght == 0) {
        window.alert('Dados Inválidos. Por favor tente novamente.')
    } else if (start <= end) {
        for (start; start <= end; start += step) {
            array.push(start)
        }
    } else if (start >= end) {
        for (start; start >= end; start -= step) {
            array.push(start)
        }
    }
    
    // Adiciona o array ao HTML
    result.innerHTML = `${array.join(' > ')}`

}

function numbersReset() {
    // Reseta o result no HTML
    result.innerText = null
    
    start.value = null
    step.value = null
    end.value = null
}

console.log(start.value)