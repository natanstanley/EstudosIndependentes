const celciusVar = document.getElementById('celcius');
const botaoVar = document.getElementById('botao');
 
botaoVar.addEventListener('click', function(){
    const celciusValor = parseFloat(celciusVar.value);
    const resultado = (celciusValor * 9/5) + 32;
    const saidaVar = document.getElementById('saida');
    saidaVar.textContent = "A temperatura em fahrenheit é:" + resultado;
})