function fatorial(num) {
    let resultado = 1
    for (c = num; c > 0; c--) {
        resultado *= c
    }

    return resultado
}

console.log(fatorial(5))