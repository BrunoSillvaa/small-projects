// Variaveis
var number = document.querySelector('input#number')
var addnumber = document.querySelector('input#addnumber')
var verify = document.querySelector('input#verify')
var select = document.querySelector('select.select')
var result = document.querySelector('div.result')

// Array
var array = []

// Adiciona os verificadores de Evento
addnumber.addEventListener('click', addNumber)
verify.addEventListener('click', verifyNumbers)

// Funcoes
function addNumber() {
    //Adiciona o numero ao array
    array.push(number.value)

    //Cria e adiciona um Option ao Select
    let option = document.createElement('option')
    option.text = `${Number(number.value)}`
    select.appendChild(option)

    // Limpa o input do numero
    number.value = null
}

function verifyNumbers() {
    // Ordena o Array
    array.sort()

    // Cria um contador e soma o Array
    var arraysum = 0
    for (let cont in array) {
        arraysum += Number(array[cont])
    }

    result.innerHTML += `<p>Ao total foram cadastrados ${array.length} números</p>`

    result.innerHTML += `<p>O maior número cadastrado foi o ${array[array.length-1]}</p>`

    result.innerHTML += `<p>O menor número cadastrado foi o ${array[0]}</p>`

    result.innerHTML += `A soma de todos os números é ${arraysum}`

    result.innerHTML += `<p>A média de todos os valores é ${arraysum/array.length}</p>`
}