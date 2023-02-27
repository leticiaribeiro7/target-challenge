const faturamentosMensais = {
    'SP' : 67836.43,
	'RJ' : 36678.66,
	'MG' : 29229.88,
	'ES' : 27165.48,
	'Outros' : 19849.53
}

function calculatePercentage(faturamentosMensais) {
    const total = Object.values(faturamentosMensais).reduce((acc, cur) => {
        return acc + cur
    }, 0);

    const percentuais = Object.keys(faturamentosMensais).map((key) => {
        let percent = faturamentosMensais[key]*100/total;
        return { estado: key, percentual: parseFloat(percent.toFixed(2)) };
    })
    
    return percentuais;
}


console.log(calculatePercentage(faturamentosMensais));