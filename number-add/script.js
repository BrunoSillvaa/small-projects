// Variaveis
var num1box = document.querySelector('input#number1')
var num2box = document.querySelector('input#number2')

var addbutton = document.querySelector('input#add')
var resetbutton = document.querySelector('input#reset')
var resultbox = document.querySelector('div#result')

// Adiciona os verificadores de Evento
addbutton.addEventListener('click', add)
resetbutton.addEventListener('click', reset)

function add() {
    // Tranforma os valores de String para Numeros
    let num1 = Number(num1box.value)
    let num2 = Number(num2box.value)
    let result = num1 + num2

    resultbox.innerText = `${result}`
}

function reset() {
    // Zera os campos de input
    num1box.value = ''
    num2box.value = ''

    // Zera o campo de resultado
    resultbox.innerText = '0'
}