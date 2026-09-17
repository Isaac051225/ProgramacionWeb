const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const inputResultado = document.getElementById('resultado');

const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMultiplicar = document.getElementById('btn-multiplicar');
const btnDividir = document.getElementById('btn-dividir');


const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';


function calcularOperacion(operacion) {

    let numero1 = parseFloat(inputNumero1.value);
    let numero2 = parseFloat(inputNumero2.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ingresa dos números válidos."
        });
        return;
    }

    let resultadoOperacion;

    switch (operacion) {

        case "suma":
            resultadoOperacion = sumar(numero1, numero2);
            break;

        case "resta":
            resultadoOperacion = restar(numero1, numero2);
            break;

        case "multiplicacion":
            resultadoOperacion = multiplicar(numero1, numero2);
            break;

        case "division":
            resultadoOperacion = dividir(numero1, numero2);
            break;
    }

    inputResultado.value = resultadoOperacion;
}


btnSumar.addEventListener('click', function() {
    calcularOperacion("suma");
});

btnRestar.addEventListener('click', function() {
    calcularOperacion("resta");
});

btnMultiplicar.addEventListener('click', function() {
    calcularOperacion("multiplicacion");
});

btnDividir.addEventListener('click', function() {
    calcularOperacion("division");
});