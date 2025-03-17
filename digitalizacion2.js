let boton = document.getElementById ("boton")
let numero_cuadros = 0;
let cuadricula = document.getElementById("cuadricula");
let nombre = ["Hamburguesa -", "Pizza -", "Patatas fritas -", "Agua -", "Coca cola -", "Fanta de naranja -", "Fanta de limon -", "Nestea -", "Helado de fresa -", "Sandwich mixto -", "Aquarius -", "Durum mixto -"]
let precio = [" 7,50€", " 9,50€", " 2,50€"," 1,50€", " 2,50€", " 2,50€", " 2,50€", " 2,50€", " 4,50€", " 4,50€", " 2,50€", " 6,50€", ]
let carrito = document.getElementById (contenedor3)

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    
    nuevoDiv.textContent = nombre[numero_cuadros] + precio[numero_cuadros] + imagen[numero_cuadros];

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
    nuevoProducto.textContent = nombre[numero] + precio[numero];
    nuevoProducto.classList.add("producto");
    
    contenedor3.appendChild(nuevoProducto);
}

https://encr.pw/FaJSK, https://l1nq.com/xO8Oj, https://l1nq.com/URCm5, https://encr.pw/Mr9qN, https://l1nq.com/GkDwo, https://l1nq.com/ajgfr, https://encr.pw/iXYHf, https://l1nq.com/ztcqS, https://l1nq.com/A6x2v, https://l1nq.com/flznr, https://encr.pw/t2wQJ, https://l1nq.com/hxgBZ