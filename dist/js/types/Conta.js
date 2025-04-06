import { EnumTransacao } from '../enums/EnumTransacao.js';
let saldo = 20000;
const transacoes = JSON.parse(localStorage.getItem('transacoes'), (key, value) => {
    if (key === 'data') {
        return new Date(value);
    }
    return value;
}) || [];
function ehMaiorQueZero(valor) {
    if (valor <= 0) {
        throw new Error('Valor precisa ser maior que zero.');
    }
}
function ehMenorQueSaldo(valor) {
    if (valor > saldo) {
        throw new Error('Saldo insuficiente.');
    }
}
function debitar(valor) {
    ehMaiorQueZero(valor);
    ehMenorQueSaldo(valor);
    saldo -= valor;
}
function depositar(valor) {
    ehMaiorQueZero(valor);
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataDeAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === EnumTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === EnumTransacao.TRANSFERENCIA ||
            novaTransacao.tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error('Transação inválida.');
        }
        transacoes.push(novaTransacao);
        localStorage.setItem('transacoes', JSON.stringify(novaTransacao));
    },
};
export default Conta;
