// Crie um array vazio. Em seguida, use o método **`push()`** para adicionar 3 números ao array.
// Em seguida, use o método **`pop()`** para removar o último número do array e exibir o array resultante

namespace exercicio6 {
    function criarNovoVetor(num1 :  number, num2 : number, num3 : number) {
        let vetor : number[] = [];
        vetor.push(num1, num2, num3);
        return vetor;
    }
    
    let meuVetorInicial : number[] = criarNovoVetor(1, 4, 9);
    console.log(`O valor do vetor inicial é: ${meuVetorInicial}`);

    function removeValor(vetor : number[]) {
        if (vetor.length > 0) {
            vetor.pop();
        }
        return vetor;
    }
    
    let meuVetorModificado = removeValor(meuVetorInicial);
    console.log(`O valor do vetor modificado é: ${meuVetorModificado}`);
}