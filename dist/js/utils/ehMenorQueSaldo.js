import Conta from '../types/Conta.js';
export function ehMenorQueSaldo(valor) {
    if (valor > Conta.getSaldo()) {
        throw new Error('Saldo insuficiente.');
    }
}
