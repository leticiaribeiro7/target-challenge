const fsPromises = require('fs').promises;

async function readFiles(filePath) {
  const data = await fsPromises.readFile(filePath)
                    .catch((err) => console.error('Falha ao ler o arquivo', err));

  return JSON.parse(data);
}

async function handleCalculation() {
    let data = await readFiles('dados.json');

    let menorValor = data[0].valor;
    let maiorValor = 0;
    let somaTotal = 0;

    data.forEach(el => {
        if (el.valor > 0) {
            if (el.valor > maiorValor) {
                maiorValor = el.valor;
            }
            if (el.valor < menorValor) {
                menorValor = el.valor;
            }
        }
        somaTotal += el.valor;
    })

    let mediaMensal = somaTotal / data.length;
    let maioresQueMedia = data.filter(el => {
        return el.valor > mediaMensal
    });

    return {maiorValor, menorValor, maioresQueMedia};

}
async function resultsOutput() {
    const values = await handleCalculation();
    console.log('Menor valor de faturamento: ', values.menorValor);
    console.log('Maior valor de faturamento: ', values.maiorValor);
    console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ', values.maioresQueMedia.length)
}


resultsOutput();