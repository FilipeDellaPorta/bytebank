import { EnumTransacao } from '../enums/EnumTransacao.js';
import { atualizarSaldo, getSaldo } from './saldo-component.js';
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação.');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let saldo = getSaldo();
    if (valor > 0) {
        if (tipoTransacao === EnumTransacao.DEPOSITO) {
            saldo += valor;
        }
        else if (tipoTransacao === EnumTransacao.TRANSFERENCIA ||
            tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO) {
            saldo -= valor;
        }
        else {
            alert('Transação inválida.');
        }
    }
    else {
        alert('Valor da transação precisa ser maior que zero.');
    }
    atualizarSaldo(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
