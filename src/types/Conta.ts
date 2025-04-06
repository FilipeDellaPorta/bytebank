import { EnumTransacao } from '../enums/EnumTransacao.js';
import { TypeTransacao } from './TypeTransacao.js';

let saldo: number = 20000;

function ehMaiorQueZero(valor: number): void {
  if (valor <= 0) {
    throw new Error('Valor precisa ser maior que zero.');
  }
}

function ehMenorQueSaldo(valor: number): void {
  if (valor > saldo) {
    throw new Error('Saldo insuficiente.');
  }
}

function debitar(valor: number): void {
  ehMaiorQueZero(valor);
  ehMenorQueSaldo(valor);
  saldo -= valor;
}

function depositar(valor: number): void {
  ehMaiorQueZero(valor);
  saldo += valor;
}

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataDeAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacao: TypeTransacao): void {
    if (novaTransacao.tipoTransacao === EnumTransacao.DEPOSITO) {
      depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao === EnumTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO
    ) {
      debitar(novaTransacao.valor);
    } else {
      throw new Error('Transação inválida.');
    }
    console.log(novaTransacao);
  },
};

export default Conta;
