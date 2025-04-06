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

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (valor > 0) {
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
      saldo += valor;
    } else if (
      tipoTransacao === TipoTransacao.TRANSFERENCIA ||
      tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
    ) {
      saldo -= valor;
    } else {
      alert('Transação inválida.');
    }
  } else {
    alert('Valor da transação precisa ser maior que zero.');
  }

  elementoSaldo.textContent = formatarMoeda(saldo);

  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
