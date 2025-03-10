let boton = document.getElementById ("boton")
let numero_cuadros = 0;
let cuadricula = document.getElementById("cuadricula");

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    numero_cuadros = numero_cuadros + 1;
    nuevoDiv.textContent = "Nuevo div " + numero_cuadros;

    nuevoDiv.classList.add("cuadro")

    console.log(nuevoDiv)
    cuadricula.appendChild(nuevoDiv);
}
for(let numero_cuadros = 0;numero_cuadros < 12;numero_cuadros = numero_cuadros + 1){
    sumarCuadro();
}

