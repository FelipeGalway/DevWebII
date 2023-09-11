namespace exercicio6 {
    function fatorial(num: number) {
        var result = num;
        if (num === 0 || num === 1) 
          return 1; 
        while (num > 1) { 
          num--;
          result *= num;
        }
        return result;
      }
    let fatorialdeN: number = fatorial(5);
    console.log(fatorialdeN);
}