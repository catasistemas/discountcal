

function calculePercent() {
    const valueA = parseInt(document.getElementById('price').value);
    const valueB = parseInt(document.getElementById('discount').value);
    const finalPrice = (value1, value2) => (value1 * (100 - value2) / 100);
    document.getElementById('resolve').innerHTML =`The Final price to pay is: ${finalPrice(valueA, valueB)}$`;
}

function vaciar(){
    const limpiar = document.getElementById('resolve');
    limpiar.innerHTML = '';
    document.getElementById('price').value ='';
    document.getElementById('discount').value ='';
}
