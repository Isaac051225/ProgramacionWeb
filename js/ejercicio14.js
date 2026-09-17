const btnConvertir = document.getElementById('btn-convertir');
const inputArreglo = document.getElementById('arreglo');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');


// Evento para realizar los cálculos
btnConvertir.addEventListener('click', function() {

    let valorArreglo = inputArreglo.value.trim();
    if (valorArreglo === "") {
        limpiarResultados();
        return;
    }


    // Separamos los números utilizando la coma
    let arreglo = valorArreglo.split(",");
    let numeros = [];

    for (let i = 0; i < arreglo.length; i++) {
        let num = parseFloat(arreglo[i].trim());

        if (isNaN(num)) {
            limpiarResultados();
            return;
        }
        numeros.push(num);
    }


    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);


    // Calculamos la suma de los números
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }


    // Calculamos el promedio
    let promedio = suma / numeros.length;


    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio.toFixed(2);
});

function limpiarResultados() {
    inputMayor.value = "";
    inputMenor.value = "";
    inputPromedio.value = "";
}
