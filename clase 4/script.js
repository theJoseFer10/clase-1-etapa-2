let libros = [];

function agregarLibro (){
    const libro = prompt("Agrgear un libro.");
    libros.push(libro);
}

function mostrarLibro(){
    console.log(libros);
}

