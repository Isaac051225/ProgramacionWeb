const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btn-agregar');
const btnCalcular = document.getElementById('btn-calcular');

const inputPromedio = document.getElementById('promedio');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');

let listaEstudiantes = [];

btnAgregar.addEventListener('click', function() {

    let nombre = inputNombre.value.trim();
    let valorCalificacion = inputCalificacion.value.trim();
    let calificacion = parseFloat(valorCalificacion);

    if (nombre === "" || valorCalificacion === "" || isNaN(calificacion)) {
        return;
    }

    listaEstudiantes.push({
        nombre: nombre,
        calificacion: calificacion
    });

    inputNombre.value = "";
    inputCalificacion.value = "";

    // Regresamos el cursor al campo nombre
    inputNombre.focus();
});


btnCalcular.addEventListener('click', function() {

    // Validamos que exista al menos un estudiante
    if (listaEstudiantes.length === 0) {
        limpiarResultados();
        return;
    }

    // Calculamos la suma de todas las calificaciones
    let sumaCalificaciones = listaEstudiantes.reduce(
        (total, estudiante) => total + estudiante.calificacion, 0
    );

    // Calculamos el promedio
    let promedio = sumaCalificaciones / listaEstudiantes.length;


    // Encontramos la calificación más alta y más baja
    let calificacionMaxima = Math.max(...listaEstudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...listaEstudiantes.map(e => e.calificacion));

    //buscamos a los estudiantes
    let estudianteMayor = listaEstudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMenor = listaEstudiantes.find(e => e.calificacion === calificacionMinima);


    // Mostramos los resultados
    inputPromedio.value = promedio.toFixed(2);
    inputMayor.value = `${estudianteMayor.nombre} (${estudianteMayor.calificacion})`;
    inputMenor.value = `${estudianteMenor.nombre} (${estudianteMenor.calificacion})`;
});

function limpiarResultados() {

    inputPromedio.value = "";
    inputMayor.value = "";
    inputMenor.value = "";
}
