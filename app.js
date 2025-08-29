
/* inicialización de variables */
let amigos = ["Ana", "Beto", "Carla", "Diego", "Elena"];

/* función para agregar un amigo a la lista */
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarListaDeAmigos();
    input.value = "";
}

/* función para asignar amigos secretos */
function mostrarListaDeAmigos(amigos) {
    const Lista = document.getElementById("listaAmigos");

    Lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        Lista.appendChild(li);
    }
}

/* funcion para sortear los amigos */
function sortearAmigo () {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

