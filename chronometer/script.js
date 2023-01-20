const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const resetBtn = document.querySelector('[data-reset]')
const result = document.querySelector('[data-result]')

startBtn.addEventListener('click', startCont)
stopBtn.addEventListener('click', stopCont)
resetBtn.addEventListener('click', resetCont)

let i = 0
let timer

function startCont() {
    timer = setInterval(() => {
        result.innerText = i++
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
