namespace exercicio10 {
    function ordenarVetor(n1: number, n2: number, n3: number, n4: number) {
        let vetor: number[] = [];
        vetor.push(n1, n2, n3, n4);
        vetor.sort();
        return vetor;
    }

    let vetorOrdenado: number[] = ordenarVetor(2, 7, 4, 1);
    console.log(vetorOrdenado);
}