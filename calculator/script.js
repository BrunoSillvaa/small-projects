function createCalculator() {
    return {
        display: document.querySelector('.display'),
        buttons: document.querySelectorAll('[data-btn]'),
        count: new String(),

        start() {
            this.clickButton()
        },

        clickButton() {
            this.buttons.forEach(button => {
                button.addEventListener('click', () => {
                    let buttonTipe = button.dataset.btn

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

        clearDisplay() {
            this.count = ''
            this.display.value = ''
        },

        deleteNum() {
            this.count = this.count.slice(0, -1)
            this.display.value = this.display.value.slice(0, -1)
        },

        performOperation() {
            this.display.value = eval(this.count)
        }
    }
}

const calculator = createCalculator()
calculator.start()