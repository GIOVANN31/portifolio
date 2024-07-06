// script.js
function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura > 0 && peso > 0) {
        const imc = peso / (altura ** 2);
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
    } else {
        alert('Por favor, insira valores válidos para altura e peso.');
    }
}
