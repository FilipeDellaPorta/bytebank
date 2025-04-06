import { formatarData, formatarMoeda } from '../utils/formatters.js';
let saldo = 20000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
