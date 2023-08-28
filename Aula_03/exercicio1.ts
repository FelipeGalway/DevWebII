// Escreva um programa TypeScript que imprima todos os números primos de 1 a 53 usando a função while

namespace exercicio1 {
    let n : number = 2;
    let aux : number = 1;
    let cont : number = 0;

    while (n <= 53) {
        cont = 0;
        aux = 1;
        
        while (aux <= n) {
            if (n % aux == 0) {
                cont++;
            }
            if (cont > 2) {
                break;
            }
            aux++;
        }

        if (cont <= 2) {
            console.log(n);
        }
        n++;
    }
}