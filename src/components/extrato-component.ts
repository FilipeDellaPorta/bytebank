import { EnumData } from '../enums/EnumData.js';
import Conta from '../types/Conta.js';
import { TypeGrupoTransacoes } from '../types/TypeGrupoTransacoes.js';
import { formatarData, formatarMoeda } from '../utils/formatters.js';

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(
  '.extrato .registro-transacoes'
);

renderizarExtrato();

function renderizarExtrato(): void {
  const grupoTransacoes: TypeGrupoTransacoes[] = Conta.getGrupoTransacoes();
  elementoRegistroTransacoesExtrato.innerHTML = '';
  let htmlRegistroTransacoes: string = '';

  for (let grupoTransacao of grupoTransacoes) {
    let htmlTransacaoItem: string = '';
    for (let transacao of grupoTransacao.transacoes) {
      htmlTransacaoItem += `
        <div class='transacao-item'>
            <div class='transacao-info'>
                <span class='tipo'>${transacao.tipoTransacao}</span>
                <strong class='valor'>${formatarMoeda(transacao.valor)}</strong>
            </div>
            <time class='data'>${formatarData(
              transacao.data,
              EnumData.EXTRATO
            )}</time>
         </div>
        `;
    }

    htmlRegistroTransacoes += `
        <div class='transacoes-group'>
            <strong class='mes-group'>${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
    `;
  }

  if (htmlRegistroTransacoes === '') {
    htmlRegistroTransacoes = '<div>Não há transações registradas.</div>';
  }

  elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponent = {
  atualizar(): void {
    renderizarExtrato();
  },
};

export default ExtratoComponent;
