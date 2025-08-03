
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const botao = document.getElementById("calcularBotao");



botao.addEventListener('click', function () {
    const valorPeso = parseFloat(peso.value);
    const valorAltura = parseFloat(altura.value);

    if (!valorPeso || !valorAltura) {
        alert("Por favor, preencha peso e altura corretamente.");
        return;
    }

    const imc = valorPeso / (valorAltura * valorAltura);
    const classificacao = classificarIMC(imc);

    alert("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
});


function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}