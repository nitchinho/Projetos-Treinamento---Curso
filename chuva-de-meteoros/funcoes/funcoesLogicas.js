export const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( dataAtual >= dataInicio && dataAtual <= dataFim );
}

export const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(dataAtual);

    if ( dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1 ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    }

    dataFim.setMonth( dataFim.getMonth() + 2 );

    return ( dataAtual < dataInicio && dataInicio < dataFim );
}

export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';