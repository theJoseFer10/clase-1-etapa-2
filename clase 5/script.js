class Libro {
    constructor (titulo, autor, anio, estado = 'disponible', capitulos){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }

    describir_libro(){
        console.log(`Titulo del libro: ${this.titulo}.\nAutor del libro: ${this.autor}.\nAnio de salida del libro: ${this.anio} Estado del libro: ${this.estado}.\nCapitulos del libro: ${this.capitulos}`)
    }

    agregar_capitulo(capitulo){
        this.capitulos.push(capitulo);
        console.log("Capitulos agregago\n");
        console.log(`Capítulo "${capitulo}" agregado a "${this.titulo}".`);
    }

    eliminarCapitulo(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no existe en este libro.`);
        }
    }
}

const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

miLibro.describir_libro();
miLibro.agregar_capitulo("Muchos años después...");
miLibro.agregar_capitulo("La llegada de los gitanos");
console.log("Capítulos:", miLibro.capitulos);
miLibro.describir_libro();