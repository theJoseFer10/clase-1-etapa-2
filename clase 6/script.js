//Insertar comentarios en el HTML
const comentario = document.getElementById("comentario");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    const nuevoComentario = comentario.value.trim();
    
    if (nuevoComentario) {
        const listaComentarios = document.getElementById("lista-comentarios");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nuevoComentario;
        listaComentarios.appendChild(nuevoElemento);
        comentario.value = "";
    } else {
        alert("Por favor, ingresa un comentario antes de agregarlo.");
    }
});