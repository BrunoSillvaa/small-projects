function createCalculator() {
    return {
        display: document.querySelector('.display'),
        buttons: document.querySelectorAll('[data-btn]'),
        count: new String(),

        start() {
            this.clickButton()
            this.keyboard()
        },

        clickButton() {
            this.buttons.forEach(button => {
                button.addEventListener('click', () => {
                    let buttonTipe = button.dataset.btn

                    if (this.count == 'Error') {
                        this.clearDisplay()
                    }

                    switch (buttonTipe) {
                        case 'num':
                            this.display.value += button.textContent
                            this.count += button.textContent
                            break
                        case 'optr':
                            this.display.value += button.textContent
                            this.count += button.value
                            break
                        case 'clear':
                            this.clearDisplay()
                            break
                        case 'delete':
                            this.deleteNum()
                            break
                        case 'equal':
                            this.performOperation()
                            break
                    }
                })
            })
        },

        keyboard() {
            document.addEventListener('keyup', event => {
                if (event.key == 'Enter') {
                    this.performOperation()
                    return
                } else if (event.key == "Backspace"){
                    this.deleteNum()
                    return
                } else if (event.key == 'Escape') {
                    this.clearDisplay()
                    return
                } else {
                    this.count += event.key
                    this.display.value += event.key
                    return
                }
            })
        },

        clearDisplay() {
            this.count = ''
            this.display.value = ''
        },

        deleteNum() {
            this.count = this.count.slice(0, -1)
            this.display.value = this.display.value.slice(0, -1)
        },

        performOperation() {
            try {
                if (this.count.length !== 0) {
                    this.display.value = eval(this.count)
                } else {
                    this.display.value = 'Adicione Valores'
                    this.count = 'Error'
                }
            } catch {
                this.display.value= 'Conta Inválida'
                this.count = 'Error'
            }
        }
    }
}

const calculator = createCalculator()
calculator.start()