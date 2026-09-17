const btnConvertir = document.getElementById('btn-convertir');
const inputKilometros = document.getElementById('kilometros');
const inputMillas = document.getElementById('millas');
const errorMsg = document.getElementById('error-msg');

btnConvertir.addEventListener('click', function() {
    let valorKilometros = inputKilometros.value.trim();

    // Validación
    if (valorKilometros === "" || isNaN(valorKilometros)) {
        errorMsg.style.display = "block";
        inputKilometros.style.borderColor = "#e63946";
        inputMillas.value = ""; // Limpiar resultado si hay error
        return;
    }

    // Ocultar error si la validación es correcta
    errorMsg.style.display = "none";
    inputKilometros.style.borderColor = "#E9ECEF";

    // Convertir el valor a número flotante
    let K = parseFloat(valorKilometros);

    // Aplicar la fórmula: M = K * 0.621371
    let M = K *  0.621371;

    // Mostrar el resultado en la caja de texto readonly sin recargar la página
    inputMillas.value = M.toFixed(5) + " mi";
});