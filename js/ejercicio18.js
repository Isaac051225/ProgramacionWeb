const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');


function agregarElemento() {
    const texto = input.value.trim();
    if (texto !== '') {
        // Creamos un nuevo elemento li
        const li = document.createElement('li');

        // Agregamos la clase elemento
        li.classList.add('elemento');

        // Creamos el texto de la tarea
        const textoNodo = document.createTextNode(texto);

        // Agregamos el texto al li
        li.appendChild(textoNodo);


        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        // Agregamos clases de Bootstrap al botón
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');


        botonEliminar.addEventListener('click', function() {
            li.remove();
        });


        // Agregamos el botón al li
        li.appendChild(botonEliminar);
        // Agregamos el li a la lista
        lista.appendChild(li);
        input.value = '';

    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}


// Asignamos la función al botón Agregar
botonAgregar.addEventListener('click', agregarElemento);