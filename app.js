// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value;

    // Verificar si el campo esta vacio
    if( nombreAmigo.trim() == '' ){
        alert('Por favor, inserte un nombre.');
        return;
    }

    // agregar el nombre al arreglo
    amigos.push(nombreAmigo.trim() );

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    actualizarLista();

}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar lista existente
    lista.innerHTML = '';

    // Recorrer el arreglo de amigos
    for( const amigo of amigos ){
        // crear un elemento li
        const li = document.createElement('li');
        li.textContent = amigo;

        //Agregar elemento li a la lista
        lista.appendChild(li);
    }
}

// Funcion para sortear un amigo
function sortearAmigo() {
    if( amigos.length == 0 ){
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // mostar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =  `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}