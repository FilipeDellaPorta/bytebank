import { EnumTransacao } from '../enums/EnumTransacao.js';
import Conta from '../types/Conta.js';
import { TypeTransacao } from '../types/TypeTransacao.js';
import SaldoComponent from './saldo-component.js';

const elementoFormulario = document.querySelector(
  '.block-nova-transacao form'
) as HTMLFormElement;

elementoFormulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert('Por favor preencha todos os campos da transação.');
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector(
    '#tipoTransacao'
  ) as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector(
    '#valor'
  ) as HTMLInputElement;
  const inputData = elementoFormulario.querySelector(
    '#data'
  ) as HTMLInputElement;

  let tipoTransacao: EnumTransacao = inputTipoTransacao.value as EnumTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  const novaTransacao: TypeTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  Conta.registrarTransacao(novaTransacao);
  SaldoComponent.atualizar();
  elementoFormulario.reset();
});
