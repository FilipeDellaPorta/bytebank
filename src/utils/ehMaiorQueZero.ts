export function ehMaiorQueZero(valor: number): void {
  if (valor <= 0) {
    throw new Error('Valor precisa ser maior que zero.');
  }
}
