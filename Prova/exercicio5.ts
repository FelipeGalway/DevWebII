namespace exercicio5 {
    function arearetangulo(altura: number, largura: number) {
        let area = altura * largura;
        return area;
    }
    
    let area: number = arearetangulo(5, 6);
    console.log(`${area} m2`);
}