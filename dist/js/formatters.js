function formatarMoeda(valor) {
    return valor.toLocaleString('pt-pt', {
        currency: 'EUR',
        style: 'currency',
    });
}
function formatarData(data, formatoData = TipoData.ACESSO) {
    if (formatoData === TipoData.ACESSO) {
        return data.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }
    else if (formatoData === TipoData.EXTRATO) {
        return data.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
        });
    }
    else {
        console.log('Erro no formato pedido.');
    }
}
