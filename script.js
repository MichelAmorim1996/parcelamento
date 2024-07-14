function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (isNaN(valor)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    for (let i = 1; i <= 12; i++) {
        document.getElementById(`v${i}`).innerHTML = (valor / i).toFixed(2);
        document.getElementById(`t${i}`).innerHTML = valor.toFixed(2);
    }
}

