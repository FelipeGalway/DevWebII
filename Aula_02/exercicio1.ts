namespace exercicio1 {
    let nota1: number = 8, nota2: number = 8, nota3: number = 9;

    let peso1: number = 2, peso2: number = 3, peso3: number = 5;

    const media: number = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) / (peso1 + peso2 + peso3);

    if (media >= 8 && media <= 10) {
        console.log("Conceito A");
    }
    else if (media >= 7 && media < 8) {
        console.log("Conceito B");
    }
    else if (media >= 6 && media < 7) {
        console.log("Conceito C");
    }
    else if (media >= 5 && media < 6) {
        console.log("Conceito D");
    }
    else if (media >= 0 && media < 5) {
        console.log("Conceito E");
    }
}
