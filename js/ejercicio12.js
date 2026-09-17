const btnConvertir = document.getElementById('btn-convertir');
const inputPesos = document.getElementById('pesos');
const inputDolares = document.getElementById('dolares');
const errorMsg = document.getElementById('error-msg');

btnConvertir.addEventListener('click', function() {
    let valorPesos = inputPesos.value.trim();

    // Validación
    if (valorPesos === "" || isNaN(valorPesos)) {
        errorMsg.style.display = "block";
        inputPesos.style.borderColor = "#e63946";
        inputDolares.value = ""; // Limpiar resultado si hay error
        return;
    }

    // Ocultar error si la validación es correcta
    errorMsg.style.display = "none";
    inputPesos.style.borderColor = "#E9ECEF";

    // Convertir el valor a número flotante
    let P = parseFloat(valorPesos);

    // Aplicar la fórmula: D = P * 0.055
    let D = P *  0.055;

    // Mostrar el resultado en la caja de texto readonly sin recargar la página
    inputDolares.value = D.toFixed(2) + " USD";
});