function criaCalculadora() {
    return {
        display: document.querySelector('#display'),

        iniciaCalculadora() {
            this.cliqueBotoes()
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.displayClear()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarUm()
                }

                if (el.classList.contains('btn-equal')) {
                    this.realizaConta()
                }

                this.display.focus()
            })
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('[ERRO] Conta inválida!')
                    return
                }

                this.display.value = conta
            } catch(e) {
                alert('[ERRO] Conta inválida!')
                return
            }
        },

        apagarUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        displayClear() {
            this.display.value = ''
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.iniciaCalculadora()