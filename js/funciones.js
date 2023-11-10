export function mostrarProductoSeleccionado(id, productos){
    let productoSeleccionado = ''
    //cuentoID = JSON.parse( localStorage.getItem('carrito')) || []
  //  console.log(cuentoID);
    let find_producto = productos.find(producto => producto.id === Number(id))
    if (find_producto) {
        let productoSeleccionado = {
            id: Number(id),
            nombre: find_producto.nombre,
            precio: find_producto.precio,
            precioTotal: find_producto.precio,
            tipo: find_producto.tipo,
            caracteristica: find_producto.caracteristica,
            descripcion: find_producto.descripcion,
            imagen: find_producto.imagen1,
            cantidad: 1
        } 
        //localStorage.removeItem 
        localStorage.setItem('select', JSON.stringify(productoSeleccionado))
        console.log(productoSeleccionado);
        window.location.href = '../pages/infoProducto.html'
    }else{
        alert('PRODUCTO NO ENCONTRADO')
    }
}

export function mostrarProductos(producto, container){
    const {imagen1, nombre, descripcion, precio, id, caracteristica} = producto
   return container.innerHTML += `
                                <div class="elemento">
                                    <div class="img">
                                        <img src="${imagen1}" alt="">
                                    </div>
                                
                                    <div class="datos">
                                        <h3>${nombre}</h3>
                                        <h4>${caracteristica}</h4>
                                        <p>$ ${precio}</p>
                                    </div> 
                                    <button id='${id}' class='btnInfo'>VER MAS INFO</button>                                 
                                </div>
                                    
    `
}

export function funcionFiltrar(string, html, array){
    html.innerHTML = ''
    
    console.log(array);
    const mostarFiltros = array.filter((producto) => producto.tipo === string) 
    //const {imagen1, nombre, descripcion, precio, id, caracteristica} = mostarFiltros
    console.log(mostarFiltros);
    mostarFiltros.map((producto) =>{
        html.innerHTML += `
        <div class="elemento">
            <div>
                <img src="${producto.imagen1}" alt="">
            </div>
        
            <div class="img">
                <h3>${producto.nombre}</h3>
                <h4>${producto.caracteristica}</h4>
                <p>$ ${producto.precio}</p>
            </div> 
            <button id='${producto.id}' class='btnInfo'>VER MAS INFO</button>                                 
        </div>
            
`
    })
   
}

// Armo detalle prodcuto

export function mostrarDetalleProducto(detalle){
    const {imagen, nombre, descripcion, precio, id, caracteristica} = JSON.parse(localStorage.getItem('select')) || []
    return detalle.innerHTML += `
                            <div class="mainInfo">
                                <div class="elementoInfo">
                                    <div>
                                        <img src="${imagen}" alt="">
                                    </div>
                                </div>                                
                                    <div class="imgInfo">
                                        <h3>${nombre}</h3>
                                        <h4>Detalle: ${caracteristica}</h4>
                                        <p>Precio del Producto: $ ${precio}</p>
                                        <p>${descripcion}</p>                                        
                                    </div>
                                </div>           
                                <div class="containerBoton">                       
                                    <button class="btnCarrito">Agergar al carrito</button>  
                                </div>  
    `
}

export function mostrarCarrito(htmlID){
    //const {imagen, nombre, descripcion, precio, id, caracteristica} = JSON.parse(localStorage.getItem('carrito')) || []
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    let acumuloTotal = 0
    if (carrito != ''){
        carrito.map((producto) =>{
            const {imagen, nombre, descripcion, precio, id, precioTotal, cantidad} = producto
            acumuloTotal +=  precioTotal
            return htmlID.innerHTML += `
            <div class="contenedorCarrito">
                <div class="itemCarrito">
                    <div>
                        <img src="${imagen}" alt="">
                    </div>
                </div>                                
                <div class="imgCarrito">
                    <h2>${nombre}</h2>
                    <h5>Seleccione Cantidad</h5>
                    <button id="${id}" class="btnRestar">➖</button>
                    <input tipe="text" value="${cantidad}" id="cantidad" readonly></input>
                    <button id="${id}" class="btnSumar">➕</button>                                     
                </div>
                <div>                                  
                    <p><u>Precio del Producto: ${precio}</u></p>
                </div>
                <div>
                    <p id="precioTotal"><u>Precio Total: ${precioTotal}</u></p>
                </div>
                <div id="EliminarDeCarrito">
                    <button id="${id} "class="btnEliminarDeCarrito">❌Eliminar de Carrito</button>
                </div
                
            </div>  
       
    `
        })
        
        return htmlID.innerHTML += `
                                <div id="muestroTotal">
                                    <p><u>Total de su Pedido: $${acumuloTotal}</u></p>
                                </div>
                                <div id="mainCarritobtn">
                                    <button id="vaciarCarrito" class="mainCarritobtn">🗑 Vaciar Carrito</button>
                                    <button id="finalizarCompra" class="mainCarritobtn">✔Finalizar Compra</button> 
                                </div> 
                                
    `
        }else{
            return htmlID.innerHTML += `
                                    <div class="carritoVacio">
                                        <img src="../images/carritoVacio.png" alt="">
                                    </div> 
            ` 
    }


}

 export function agregarCarrito(){
    let carrito = []  
    carrito = JSON.parse( localStorage.getItem('carrito')) || []

    const agregarItem = JSON.parse( localStorage.getItem('select'))
   let find_producto = carrito.find( producto => producto.id === Number(agregarItem.id))
    if (!find_producto){  
        carrito.push(agregarItem)     
        localStorage.setItem('carrito', JSON.stringify(carrito))  
        window.location.href = '../pages/carrito.html'
    }else{
        alert('Ya agrego este producto al carrito')
    }

    
 }
