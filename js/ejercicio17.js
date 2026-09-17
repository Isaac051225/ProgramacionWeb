const inputTarea = document.getElementById('tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');


//clousure para manejar las tareas
const manejarTareas = () => {

    // JSON.parse convierte el JSON guardado en un arreglo
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    const agregarTarea = () => {

        // Obtenemos el texto escrito y quitamos espacios
        const textoTarea = inputTarea.value.trim();

        // Verificamos que no esté vacío
        if (textoTarea === '') {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Ingresa una tarea."
            });
            return;
        }

        // Agregamos la nueva tarea al arreglo
        tareas.push({
            tarea: textoTarea,
            completada: false
        });

        // Convertimos el arreglo a JSON y lo guardamos
        localStorage.setItem('tareas', JSON.stringify(tareas));
        inputTarea.value = '';
        renderizarTareas();

        // Mostramos mensaje de éxito
        Swal.fire({
            icon: "success",
            title: "Tarea agregada",
            text: "La tarea se guardó correctamente."
        });
    };


    // Función para eliminar una tarea
    const eliminarTarea = (indice) => {

        Swal.fire({
            title: "¿Eliminar tarea?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then((resultado) => {

            // Si el usuario confirma
            if (resultado.isConfirmed) {
                tareas.splice(indice, 1);
                localStorage.setItem('tareas', JSON.stringify(tareas));
                renderizarTareas();

                Swal.fire({
                    icon: "success",
                    title: "Eliminada",
                    text: "La tarea fue eliminada."
                });
            }
        });
    };


    // Función para mostrar las tareas en la página
    const renderizarTareas = () => {
        listaTareas.innerHTML = '';
        // Recorremos todas las tareas
        tareas.forEach((tarea, indice) => {
            const elementoTarea = document.createElement('div');

            // Mostramos el texto y el botón eliminar
            elementoTarea.innerHTML = `
    <span>${tarea.tarea}</span>
    <button type="button" class="btn-eliminar">Eliminar</button>
`;
            
            // Asignamos la función eliminar al botón
            elementoTarea.querySelector('.btn-eliminar')
                .addEventListener('click', () => eliminarTarea(indice));
            
            // Agregamos la tarea a la página
            listaTareas.appendChild(elementoTarea);
        });
    };


    // Regresamos las funciones que podremos utilizar fuera
    return {
        agregarTarea,
        renderizarTareas
    };
};


// Creamos el objeto que contiene las funciones del closure
const tareas = manejarTareas();


// Evento del botón Agregar Tarea
btnAgregar.addEventListener('click', function() {
    tareas.agregarTarea();
});


// Mostramos las tareas guardadas al cargar la página
tareas.renderizarTareas();
