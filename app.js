// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtener el campo de texto
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.'); // Mostrar alerta si está vacío
        return; // Salir de la función
    }

    // Agregar el nombre al array
    listaAmigos.push(nombreAmigo);

    // Limpiar el campo de texto
    inputAmigo.value = '';

    // Actualizar la lista visual en la página
    actualizarListaAmigos();

    // Enfocar el campo de texto para facilitar la entrada de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Obtener el elemento <ul>
    listaAmigosElement.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno a la lista
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = `${index + 1}. ${amigo}`; // Agregar el nombre del amigo
        listaAmigosElement.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar si hay suficientes amigos en la lista
    if (listaAmigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para realizar el sorteo.'); // Mostrar alerta si no hay suficientes
        return; // Salir de la función
    }

    const resultadoElement = document.getElementById('resultado'); // Obtener el elemento para mostrar el resultado
    resultadoElement.innerHTML = ''; // Limpiar el resultado anterior

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const li = document.createElement('li'); // Crear un nuevo elemento <li>
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`; // Agregar el resultado
    resultadoElement.appendChild(li); // Agregar el <li> al resultado
}