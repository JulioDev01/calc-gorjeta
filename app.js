const btnCalc = document.getElementById('btnCalcular');

btnCalc.addEventListener('click', calcularGorjeta)

function calcularGorjeta(){
    const valorConta = parseFloat(document.getElementById('inputVal').value);
    const porcentagem = parseFloat(document.getElementById('porcent').value);

    if (valorConta === ""){
        alert('Por favor, preencha os dados!')
        return;
    }

    const calculo = valorConta * porcentagem
    const total = calculo + valorConta

    document.getElementById('inputGorj').value = 'R$' + calculo.toFixed(2);
    document.getElementById('inputTot').value = 'R$' + total.toFixed(2);
}