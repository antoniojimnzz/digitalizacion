let boton = document.getElementById ("boton")
let numero_cuadros = 0;
let cuadricula = document.getElementById("cuadricula");
let nombre = ["Hamburguesa -", "Pizza -", "Patatas fritas -", "Agua -", "Coca cola -", "Fanta de naranja -", "Fanta de limon -", "Nestea -", "Helado de fresa -", "Sandwich mixto -", "Aquarius -", "Durum mixto -"]
let precio = [" 7,50€", " 9,50€", " 2,50€"," 1,50€", " 2,50€", " 2,50€", " 2,50€", " 2,50€", " 4,50€", " 4,50€", " 2,50€", " 6,50€", ]
let precioNum = [7.50, 9.50, 2.50, 1.50, 2.50, 2.50, 2.50, 2.50, 4.50, 4.50, 2.50, 6.50]
let imagen = ["https://www.cnature.es/wp-content/uploads/2021/12/hamburguesa-con-guacamole.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/01/12/un-plato-de-patatas-fritas-recien-hechas.jpeg",
"https://5sentidos.es/wp-content/uploads/2023/12/Agua-Mineral-Font-Vella-Botella-1.5-Litros-600px-1200x900.png",
"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202109/28/00118622300228____23__600x600.jpg",
"https://tucervezaadomicilio.com/wp-content/uploads/2020/07/lata-fanta-naranja.jpg",
"https://tucervezaadomicilio.com/wp-content/uploads/2020/07/lata-fanta-limon.jpg",
"https://www.dragonoriental.com/972-large_default/nestea-330-ml.jpg",
"https://m.media-amazon.com/images/I/81TYkdFOYwL.jpg",
"https://cdn0.uncomo.com/es/posts/0/6/9/como_hacer_un_sandwich_mixto_33960_orig.jpg",
"https://www.calfruitos.com/fotos/pr_4714_20230922101431.jpg",
"https://www.royalkebab-pizzeria.es/wp-content/uploads/2021/09/durum-1.png",]
let carrito = document.getElementById (contenedor3)
let total = 0;
let totalDiv = document.createElement("div")
let precioTotal = total + precioNum[numero_cuadros] + "€";

function sumarCuadro(){
    let nuevoDiv = document.createElement("div");
    let nuevoImg = document.createElement("img")
    
    nuevoDiv.textContent = nombre[numero_cuadros] + precio[numero_cuadros];
    nuevoImg.src = imagen[numero_cuadros]
    nuevoDiv.appendChild(nuevoImg)

    nuevoDiv.addEventListener("click", sumarProducto.bind (null, numero_cuadros) )

    nuevoDiv.classList.add("cuadro")
    nuevoImg.classList.add("imagen")

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

    totalDiv.classList.add("total");
    contenedor3.appendChild(totalDiv)

    total += precioNum[numero];
    totalDiv.textContent = "Total: " + total.toFixed(2) + "€";
}