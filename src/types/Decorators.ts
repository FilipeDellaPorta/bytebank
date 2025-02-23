export function ValidaDebito(
  target: any,
  propertykey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (valorDoDebito: number) {
    if (valorDoDebito <= 0) {
      throw new Error("O valor a ser debitado precisa ser maior que zero!");
    }

    if (valorDoDebito > this.saldo) {
      throw new Error("Saldo insuficiente!");
    }

    return originalMethod.apply(this, [valorDoDebito]);
  };

  return descriptor;
}

export function validaDeposito(
  target: any,
  propertykey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (valorDoDeposito) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor a ser debitado precisa ser maior que zero!");
    }
    return originalMethod.apply(this, [valorDoDeposito]);
  };

  return descriptor;
}
