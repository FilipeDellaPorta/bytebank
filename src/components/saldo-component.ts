import Conta from "../types/Conta-antiga.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;

const elementoDataAcesso = document.querySelector(
  ".block-saldo time"
) as HTMLElement;

if (elementoDataAcesso) {
  elementoDataAcesso.textContent = formatarData(
    Conta.getDataAcesso(),
    FormatoData.DATA_ACESSO
  );
}

renderizarSaldo();
function renderizarSaldo(): void {
  if (elementoSaldo) {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
  }
}

const SaldoComponent = {
  atualizar() {
    renderizarSaldo();
  },
};

export default SaldoComponent;
