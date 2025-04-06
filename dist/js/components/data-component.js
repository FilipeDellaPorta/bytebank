import Conta from '../types/Conta.js';
import { formatarData } from '../utils/formatters.js';
const elementoDataAcesso = document.querySelector('.block-saldo time');
renderizarData();
function renderizarData() {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataDeAcesso());
    }
}
const DataComponent = {
    atualizar: function () {
        renderizarData();
    },
};
export default DataComponent;
