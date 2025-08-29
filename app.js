
/* inicialización de variables */
let amigos = [];

const inputNombre = document.getElementById("input-nombre");
const btnAgregar = document.getElementById("btn-agregar");
const btnAsignar = document.getElementById("btn-asignar");
const ulLista = document.getElementById("ul-lista");
const divResultado = document.getElementById("div-resultado");

/* función para agregar un amigo a la lista */
btnAgregar.addEventListener("click", function() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    ulLista.appendChild(nuevoElemento);

    inputNombre.value = "";
});

/* función para asignar amigos secretos */
function asignarAmigosSecretos(amigos) {
    const ulLista = document.getElementById("lista");

    ulLista.innerHTML = ""; // Limpiar la lista antes de asignar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];

        ulLista.appendChild(li);
    }
}

