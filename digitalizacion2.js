let boton = document.getElementById ("boton")
let numero_cuadros = 0;
let cuadricula = document.getElementById("cuadricula");
let nombre = ["Hamburguesa", "Pizza", "Patatas fritas", "Agua", "Coca cola", "Fanta de naranja", "Fanta de limon", "Nestea", "Bocadillo de jamón", "Sandwich mixto", "Aquarius", "Kebab mixto"]
let carrito = document.getElementById (contenedor3)

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    
    nuevoDiv.textContent = nombre[numero_cuadros];

    nuevoDiv.addEventListener("click", sumarProducto.bind (null, numero_cuadros) )

    nuevoDiv.classList.add("cuadro")

    console.log(nuevoDiv)
    cuadricula.appendChild(nuevoDiv);
    numero_cuadros = numero_cuadros + 1;
}
for(let numero_cuadros = 0;numero_cuadros < 12;numero_cuadros = numero_cuadros + 1){
    sumarCuadro();
}


function sumarProducto(numero){
    let nuevoProducto = document.createElement ("div");

    console.log(numero)
    nuevoProducto.textContent = nombre[numero];

    nuevoProducto.classList.add("producto");
    
    contenedor3.appendChild(nuevoProducto);
}