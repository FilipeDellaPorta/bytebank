import { EnumTransacao } from '../enums/EnumTransacao.js';
import { TypeTransacao } from './TypeTransacao.js';

let saldo: number = 20000;

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataDeAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacao: TypeTransacao): void {
    if (novaTransacao.valor > 0) {
      if (novaTransacao.tipoTransacao === EnumTransacao.DEPOSITO) {
        saldo += novaTransacao.valor;
      } else if (
        novaTransacao.tipoTransacao === EnumTransacao.TRANSFERENCIA ||
        novaTransacao.tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO
      ) {
        saldo -= novaTransacao.valor;
      } else {
        alert('Transação inválida.');
      }
    } else {
      alert('Valor da transação precisa ser maior que zero.');
    }
    console.log(novaTransacao);
  },
};

export default Conta;
