// Crie um array com 5 números. Em seguida, use um loop for para iterar sobre o array e exibir a soma de todos os números

namespace exercicio4 {
    let numeros : number[] = [1, 45, 76, 3, 98];
    let soma : number = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    console.log(`A soma dos valores é: ${soma}`);
}