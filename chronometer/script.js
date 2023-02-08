const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const resetBtn = document.querySelector('[data-reset]')

const minutes = document.querySelector('[data-result="minutes"]')
const seconds = document.querySelector('[data-result="seconds"]')
const miliseconds = document.querySelector('[data-result="miliseconds"]')

startBtn.addEventListener('click', startCont)
stopBtn.addEventListener('click', stopCont)

let i = 00
let timer

function startCont() {
    timer = setInterval(() => {
        seconds.textContent = i++
    }, 1000)
    startBtn.setAttribute('disabled', '')
}

function stopCont() {
    clearInterval(timer)
    startBtn.removeAttribute('disabled')
}

function resetCont() {
    stopCont()
    i = 0
    result.innerText = '0'
}
