// Escreva um programa TypeScript que leia uma lista de números inteiros do usuário e imprima o maior número inserido

namespace exercicio2 {
    let lista : number[] = [1, 21, 43, 64, -5, 16, 78];
    let maior : number = lista[0];

    for (let i = 1; i <= lista.length; i++) {
        if (maior < lista[i]) {
            maior = lista[i];
        }
    }

    console.log(maior);

    console.log(`O maior valor é ${Math.max(...lista)}`);
}


