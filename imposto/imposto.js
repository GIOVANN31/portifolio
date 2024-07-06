// script.js
function calcularImposto() {
    const renda = parseFloat(document.getElementById('renda').value);
    const deducoes = parseFloat(document.getElementById('deducoes').value);

    if (!isNaN(renda) && !isNaN(deducoes)) {
        const baseCalculo = renda - deducoes;
        const aliquota = calcularAliquota(baseCalculo);
        const imposto = baseCalculo * (aliquota / 100);

        document.getElementById('resultado').innerHTML = `Imposto a pagar: R$ ${imposto.toFixed(2)}`;
    } else {
        alert('Por favor, insira valores válidos.');
    }
}

function calcularAliquota(baseCalculo) {
    // Implemente aqui a lógica para determinar a alíquota com base na faixa de renda.
    // Exemplo: se baseCalculo < 2000, retorne 7.5; se baseCalculo >= 2000, retorne 15.
    // Você pode definir as faixas e alíquotas conforme a legislação vigente.
    // Lembre-se de considerar as deduções também.
    // Retorne a alíquota em porcentagem.
}
