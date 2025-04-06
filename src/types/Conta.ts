import { EnumTransacao } from '../enums/EnumTransacao.js';
import { ehMaiorQueZero } from '../utils/ehMaiorQueZero.js';
import { ehMenorQueSaldo } from '../utils/ehMenorQueSaldo.js';
import { TypeGrupoTransacoes } from './TypeGrupoTransacoes.js';
import { TypeTransacao } from './TypeTransacao.js';

let saldo: number = JSON.parse(localStorage.getItem('saldo')) || 20000;
const transacoes: TypeTransacao[] =
  JSON.parse(
    localStorage.getItem('transacoes'),
    (key: string, value: string) => {
      if (key === 'data') {
        return new Date(value);
      }
      return value;
    }
  ) || [];

function debitar(valor: number): void {
  ehMaiorQueZero(valor);
  ehMenorQueSaldo(valor);
  saldo -= valor;
  localStorage.setItem('saldo', saldo.toString());
}

function depositar(valor: number): void {
  ehMaiorQueZero(valor);
  saldo += valor;
  localStorage.setItem('saldo', saldo.toString());
}

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataDeAcesso(): Date {
    return new Date();
  },

  getGrupoTransacoes(): TypeGrupoTransacoes[] {
    const grupoDeTransacoes: TypeGrupoTransacoes[] = [];
    const listaTransacoes: TypeTransacao[] = structuredClone(transacoes);
    const transacoesOrdenadas: TypeTransacao[] = listaTransacoes.sort(
      (t1, t2) => t2.data.getTime() - t1.data.getTime()
    );
    let labelAtualGrupoTransacao: string = '';

    for (let transacao of transacoesOrdenadas) {
      let labelGrupoTransacao: string = transacao.data.toLocaleDateString(
        'pt-br',
        {
          month: 'long',
          year: 'numeric',
        }
      );
      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        grupoDeTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        });
      }
      grupoDeTransacoes.at(-1).transacoes.push(transacao);
    }

    return grupoDeTransacoes;
  },

  registrarTransacao(novaTransacao: TypeTransacao): void {
    if (novaTransacao.tipoTransacao === EnumTransacao.DEPOSITO) {
      depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao === EnumTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO
    ) {
      debitar(novaTransacao.valor);
      novaTransacao.valor *= -1;
    } else {
      throw new Error('Transação inválida.');
    }
    transacoes.push(novaTransacao);
    console.log(this.getGrupoTransacoes());
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
  },
};

export default Conta;
