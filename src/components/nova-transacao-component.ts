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

  if (valor > 0) {
    if (tipoTransacao === EnumTransacao.DEPOSITO) {
      saldo += valor;
    } else if (
      tipoTransacao === EnumTransacao.TRANSFERENCIA ||
      tipoTransacao === EnumTransacao.PAGAMENTO_BOLETO
    ) {
      saldo -= valor;
    } else {
      alert('Transação inválida.');
    }
  } else {
    alert('Valor da transação precisa ser maior que zero.');
  }

  elementoSaldo.textContent = formatarMoeda(saldo);

  const novaTransacao: TypeTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
