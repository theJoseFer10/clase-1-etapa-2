const disco = {
    titulo: "Debe tirar más fotos",
    artista: "Bad Bunny",
    anio: 2025,
    disponible: true,
    canciones: ['NuevaYol', 'Perfumito Nuevo', 'Velda', 'La mudanza'],

    mostrarInfo(){
        const estado = this.disponible ? "Sí" : "No";
        console.log(`${this.titulo} de ${this.artista} lanzado en: ${this.anio}.\nDisponibilidad: ${estado}`);
    },

    mostrarCanciones(){
        console.log(`Canciones: ${this.canciones.join(", ")}`);
    },

    agregarCancion(nuevaCancion){
        this.canciones.push(nuevaCancion);
        console.log(`"${nuevaCancion}" agregada.`);
    },

    eliminarCancion(cancionAEliminar){
        const indice = this.canciones.indexOf(cancionAEliminar);
        
        if (indice !== -1) {
            this.canciones.splice(indice, 1);
            console.log(`"${cancionAEliminar}" eliminada.`);
        } else {
            console.log("La canción no existe o la lista está vacía.");
        }
    },

    cambiarEstatus(nuevoEstado){
        this.disponible = nuevoEstado;
        console.log(`Disponibilidad cambiada a: ${this.disponible}`);
    }
}

console.log(disco.mostrarInfo());
console.log(disco.mostrarCanciones());

disco.cambiarEstatus(false);
console.log(disco.mostrarInfo());
