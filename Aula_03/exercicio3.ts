// Escreva um programa TypeScript que leia um número inteiro do usuário e 
//imprima todos os números de 1 a esse número que são divisíveis por 3

namespace exercicio3 {
    let n : number = 45;
    let i : number = 0;

    for (i = 0; i <= n; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }   
    }
}
