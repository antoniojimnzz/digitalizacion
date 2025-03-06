let boton = document.getElementById("boton")
let numero_cuadros = 0;
let cuadricula = document.getElementById("cuadricula");

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    numero_cuadros = numero_cuadros + 1;
    nuevoDiv.textContent = "Nuevo div " + numero_cuadros;

    nuevoDiv.classList.add("cuadro")

    cuadricula.appendChild(nuevoDiv);
}
for(let i = 0;i < 16;i = i + 1){
    sumarCuadro();
}

boton.addEventListener("click", sumarCuadro);