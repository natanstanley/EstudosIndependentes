const input = document.getElementById("valorReal");
const botao = document.getElementById("botao");
const paragrafoResultado = document.getElementById('resultado');

botao.addEventListener('click', function(){
  const valorReal = parseFloat(input.value);

    const valorDolar = valorReal* 5.54;

    paragrafoResultado.textContent = `R$ ${valorReal.toFixed(2)} é igual à US$ ${valorDolar.toFixed(2)}`;
});