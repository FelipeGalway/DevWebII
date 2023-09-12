namespace exercicio9 {
    function fibonacci(n: number) {
        if (n == 1) {
            return 1;
        }
        else if (n == 2) {
            return 1;
        }
        else {
            let resultado: number = fibonacci(n - 1) + fibonacci(n - 2);
            return resultado;
        }
    }
    
    let n = 3;
    let resultado = fibonacci(n);
    console.log(`O ${n}-ésimo termo da sequência de Fibonacci é ${resultado}`);
}