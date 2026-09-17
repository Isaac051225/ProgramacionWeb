const btnConvertir = document.getElementById('btn-convertir');
const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const errorMsg = document.getElementById('error-msg');

btnConvertir.addEventListener('click', function() {
    let valorCelsius = inputCelsius.value.trim();

    // Validación
    if (valorCelsius === "" || isNaN(valorCelsius)) {
        errorMsg.style.display = "block";
        inputCelsius.style.borderColor = "#e63946";
        inputFahrenheit.value = ""; // Limpiar resultado si hay error
        return;
    }

    // Ocultar error si la validación es correcta
    errorMsg.style.display = "none";
    inputCelsius.style.borderColor = "#E9ECEF";

    // Convertir el valor a número flotante
    let C = parseFloat(valorCelsius);

    // Aplicar la fórmula: F = (C * 9/5) + 32
    let F = (C * 9 / 5) + 32;

    // Mostrar el resultado en la caja de texto readonly sin recargar la página
    inputFahrenheit.value = F.toFixed(2) + " °F";
});