namespace exercicio8 {
    function calculadora(n1: number = 0, n2: number = 0, op: string) {
        
        let resultado: number = 0;
        if (op == "+") {
            resultado = n1 + n2;
        }
        else if (op == "-") {
            resultado = n1 - n2;
        }
        else if (op == "*") {
            resultado = n1 * n2;
        }
        else if (op == "/") {
            resultado = n1 / n2;
        }
        return resultado;
    }

    let conta: number = calculadora(1, 2, '*');
    console.log(conta);
}