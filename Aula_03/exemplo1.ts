namespace exemplo1 {
    // do while
    let num : number = 18;
    let i : number = 0;
    do {
        console.log(i);
        i++; // i = i + 1
        num = i == 10 ? 19 : 18;
    } while (num <= 18);

    // while
    while (i <= 20) {
        console.log(i);
        i++;
    }

    // for
    for (i = 21; i <= 30; i++) {
        console.log(i);
    }
}