namespace exercicio7 {
    let n : number = 2;
    let aux : number = 1;
    let cont : number = 0;

    console.log('Os números primos que existem de 1 a 100 são: ');

    while (n <= 100) {
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
