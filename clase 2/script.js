function returnMessage() {
    const nombre = document.getElementById('nombre').value;
    const ap = document.getElementById('ap').value;
    const am = document.getElementById('am').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);

    console.log(nombre, ap, am, calificacion);

    if (isNaN(calificacion)) {
        alert("Por favor, ingresa un número válido");
        return; 
    }

    if (calificacion >= 90) {
        alert(`Excelente ${nombre}`);
    } else if (calificacion >= 75) { 
        alert(`Bien ${nombre}`);
    } else if (calificacion >= 60) {
        alert(`Suficiente ${nombre}`);
    } else if (calificacion < 60) {
        alert(`No pasaste ${nombre}`);
    } else {
        alert("Calificación no válida compa");
    }
}