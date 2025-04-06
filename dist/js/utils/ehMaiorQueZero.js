export function ehMaiorQueZero(valor) {
    if (valor <= 0) {
        throw new Error('Valor precisa ser maior que zero.');
    }
}
