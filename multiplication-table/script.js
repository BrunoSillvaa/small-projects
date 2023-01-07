// Variaveis
var ready = document.querySelector('input#ready')
var reset = document.querySelector('input#reset')

// Adiciona os verificadores de Evento
ready.addEventListener('click', numMultiply)
reset.addEventListener('click', numsReset)

// Funcoes
function numMultiply() {

    var num = Number(document.querySelector('input#number').value)

    // Cria a tabela e adiciona ID a ela
    var table = document.createElement('table')
    table.setAttribute('id', 'table')

    // Insere a Tabela
    var card = document.querySelector('div.card')
    var buttons = document.querySelector('div#buttons')
    card.insertBefore(table, buttons)

    // Modifica a Tabela
    for (var c = 1; c <= 10; c++) {
        var table = document.querySelector('#table')
        var trow = document.createElement('tr')

        trow.innerHTML = `<td>${num} x ${c}</td> <td>=</td> <td class="result" ><strong>${num * c}</strong></td>`
        table.appendChild(trow)
    }
}

function numsReset() {
    var card = document.querySelector('div.card')

    // Remove o valor do input e exclui a tabela
    document.querySelector('input#number').value = null
    card.removeChild(document.querySelector('table#table'))
}