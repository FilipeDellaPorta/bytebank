let saldo = 20000;

const elementoSaldo = document.querySelector(
  '.saldo-valor .valor'
) as HTMLElement;
elementoSaldo.textContent = saldo.toString();
