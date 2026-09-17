const btnConvertir = document.getElementById('btn-convertir');
const inputEdad = document.getElementById('edad');
const inputVotador = document.getElementById('votador');
const errorMsg = document.getElementById('error-msg');

btnConvertir.addEventListener('click', function() {
    let valorEdad = inputEdad.value.trim();

     let E = parseInt(valorEdad);

    // Validación
    if (valorEdad === "" || isNaN(E) || E < 0) {
        errorMsg.style.display = "block";
        inputEdad.style.borderColor = "#e63946";
        inputVotador.value = ""; // Limpiar resultado si hay error
        return;
    }

    // Ocultar error si la validación es correcta
    errorMsg.style.display = "none";
    inputEdad.style.borderColor = "#E9ECEF";

    // Aplicar la fórmula: let V = E >= 18;
    let V;
    if (E >= 18) {
        V = "Puedes votar";
    } else {
        V = "No puedes votar";
    }

    // Mostrar el resultado en la caja de texto readonly sin recargar la página
    inputVotador.value = V;
});