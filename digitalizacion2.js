let boton = document.getElementById("boton")
let numero_cuadros = 0;
let contenedor = document.getElementById("contenedor");

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    numero_cuadros = numero_cuadros + 1;
    nuevoDiv.textContent = "Nuevo div " + numero_cuadros;

    nuevoDiv.classList.add("cuadro")

    contenedor.appendChild(nuevoDiv);
}
for(let contador=0;contador < 16;contador = contador + 1){
    sumarCuadro();
}

boton.addEventListener("click", sumarCuadro);