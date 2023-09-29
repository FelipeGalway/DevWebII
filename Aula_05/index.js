const {createApp} = Vue;

createApp({
    data() {
        return {
            display: "0",
            numeroAtual: null,
            numeroAnterior: null,
            operador: null
        }
    },
    methods: {
        lidarBotao(botao) {
            switch(botao) {
                case "+":
                case "-":
                case "*":
                case "/":
                    this.lidarOperador(botao);
                    break;
                case "=":
                    this.lidarIgual();
                    break;
                case ".":
                    this.lidarDecimal();
                    break;
                case "AC":
                    this.lidarClear();
                    break;
                default:
                    this.lidarNumero(botao);
                    break;
            }
        },
        
        lidarOperador(operador) {
            this.numeroAnterior = this.display;
            this.operador = operador;
            this.display = '0';
        }, 

        lidarDecimal() {
            if(!this.display.includes(".")) {
                this.display += ".";
            }
        },

        lidarIgual() {
            this.numeroAtual = this.display;
            switch(this.operador) {
                case "+":
                    this.display = parseFloat(this.numeroAnterior) + parseFloat(this.numeroAtual);
                    break;
                case "-":
                    this.display = parseFloat(this.numeroAnterior) - parseFloat(this.numeroAtual);
                    break;
                case "*":
                    this.display = parseFloat(this.numeroAnterior) * parseFloat(this.numeroAtual);
                    break;
                case "/":
                    this.display = parseFloat(this.numeroAnterior) / parseFloat(this.numeroAtual);
                    break;  
            }
        },

        lidarClear() {
            this.display = '0';
            this.numeroAnterior = null;
            this.numeroAtual = null;
            this.operador = null;
        },

        lidarNumero(numero) {
            if(this.display == '0') {
                this.display = numero;
            } else {
                this.display += numero; 
            }
        }
    }
}).mount("#app");