// Crie um array com 5 números. Em seguida, use um loop for 
// para iterar sobre o array e exibir a soma de todos os números

namespace exercicio4 {
    let lista : number[] = [1, 45, 76, 3, 98];
    let i : number;
    let contador : number = 0;
    let soma : number = 0;
    
    for (i = 0; i < lista.length; i++) {
        contador = lista[i];
        soma += contador;
        contador = 0;
    }

    console.log(`A soma dos valores da lista é ${soma}`);
}