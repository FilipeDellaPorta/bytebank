import { EnumData } from '../enums/EnumData.js';
import Conta from '../types/Conta.js';
import { formatarData, formatarMoeda } from '../utils/formatters.js';
const elementoRegistroTransacoesExtrato = document.querySelector('.extrato .registro-transacoes');
renderizarExtrato();
function renderizarExtrato() {
    const grupoTransacoes = Conta.getGrupoTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    let htmlRegistroTransacoes = '';
    for (let grupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem = '';
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
        <div class='transacao-item'>
            <div class='transacao-info'>
                <span class='tipo'>${transacao.tipoTransacao}</span>
                <strong class='valor'>-${formatarMoeda(transacao.valor)}</strong>
            </div>
            <time class='data'>${formatarData(transacao.data, EnumData.EXTRATO)}</time>
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
