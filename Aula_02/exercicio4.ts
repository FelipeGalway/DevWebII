namespace exercicio4 {
    const nome: string = "Felipe";
    const hora: number = 19;

    if (hora >= 6 && hora <= 12) {
        console.log(`Bom dia, ${nome}`);
    }
    else if (hora > 12 && hora <= 18) {
        console.log(`Boa tarde, ${nome}`)
    }
    else {
        console.log(`Boa noite, ${nome}`)
    }
}