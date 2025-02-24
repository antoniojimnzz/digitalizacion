let cuadro = document.getElementById("izquierda");
let boton = document.getElementById("boton");

function cambiarColor() {
    let colores = ["lightsalmon", "red", "blue", "lightgreen"];

    let color_aleatorio = colores[Math.floor(Math.random() * colores.length)]
    cuadro.style.backgroundColor = color_aleatorio;
}

boton.addEventListener("click", cambiarColor);