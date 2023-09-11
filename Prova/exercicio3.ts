namespace exercicio3 {
    let resultado: number = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            resultado += i;
        }
    }
    console.log(resultado);
}
