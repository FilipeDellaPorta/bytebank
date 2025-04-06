import { EnumData } from '../enums/EnumData.js';
export function formatarMoeda(valor) {
    return valor.toLocaleString('pt-pt', {
        currency: 'EUR',
        style: 'currency',
    });
}
export function formatarData(data, formatoData = EnumData.ACESSO) {
    if (formatoData === EnumData.ACESSO) {
        return data.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }
    else if (formatoData === EnumData.EXTRATO) {
        return data.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
        });
    }
    else {
        console.log('Erro no formato pedido.');
    }
}
