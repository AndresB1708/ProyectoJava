import { mostrarCarrito } from "./funciones.js";
// import { funcionFiltrar } from "./funciones.js";
//import { sumoTotal } from "./funciones.js";

const carritoID = document.getElementById('carrito')
mostrarCarrito(carritoID)


const totalProducto = () => {
    let botones = document.querySelectorAll('.cantidadProducto')
    botones.forEach((boton) => {
      boton.addEventListener('click', (evento) => {
      const editarTotal = JSON.parse(localStorage.getItem('carrito')) || []
      let find_producto = editarTotal.find(producto => producto.id === Number(evento.target.id))
      console.log(editarTotal);
        if (find_producto) {
          find_producto.precioTotal = find_producto.precio * Number(evento.target.value)
          localStorage.setItem('carrito', JSON.stringify(editarTotal))
        }else{
          alert('Producto no encontrado')
        }
      })
      })
}

totalProducto()

let botonRestar = document.querySelectorAll('.btnRestar')
botonRestar.forEach((boton) => {
  boton.addEventListener('click', () =>{
    console.log(boton.id)
    const editarTotal = JSON.parse(localStorage.getItem('carrito')) || []
    let find_producto = editarTotal.find(producto => producto.id === Number(boton.id))
    console.log(find_producto);
    if (find_producto.cantidad != 1) {
      find_producto.cantidad = find_producto.cantidad - 1
      find_producto.precioTotal = find_producto.precio * find_producto.cantidad
      console.log(editarTotal);
      localStorage.setItem('carrito', JSON.stringify(editarTotal))
      window.location = './carrito.html'
    }
  })
})

let botonSumar = document.querySelectorAll('.btnSumar')
botonSumar.forEach((boton) => {
  boton.addEventListener('click', () =>{
    console.log(boton.id)
    const editarTotal = JSON.parse(localStorage.getItem('carrito')) || []
    let find_producto = editarTotal.find(producto => producto.id === Number(boton.id))
    if (find_producto.cantidad != 10) {
      find_producto.cantidad = find_producto.cantidad + 1
      find_producto.precioTotal = find_producto.precio * find_producto.cantidad
      localStorage.setItem('carrito', JSON.stringify(editarTotal))
      window.location = './carrito.html'
    }
  })
})

let EliminarDeCarrito = document.querySelectorAll('.btnEliminarDeCarrito')
EliminarDeCarrito.forEach((boton) => {
  boton.addEventListener('click', () =>{
    const editarTotal = JSON.parse(localStorage.getItem('carrito')) || []
    let find_producto = editarTotal.find(producto => producto.id === Number(boton.id))
    let copioArray = []
    editarTotal.map((producto) =>{
       if (producto.id != boton.id){
          copioArray.push(producto)
       }
      
    })
    console.log(copioArray);
    localStorage.setItem('carrito', JSON.stringify(copioArray))
    window.location = './carrito.html'

  })
})

const vaciarCarrito = document.getElementById('vaciarCarrito')

vaciarCarrito.addEventListener('click', () => {

  vacioCarrito()
})

function vacioCarrito(){
  localStorage.clear()
  window.location = './carrito.html'
}

//   PROMESA /////////////////////
const finalizarVenta = () => {
  return new Promise((resolve, reject) => {
    let aceptar = confirm("Clicka en Aceptar o Cancelar"); // true o falso
    
    setTimeout(() => {
      if(aceptar) resolve('Su compra fue finalizada, le vamos a enviar un emial de seguiento')
      reject(new Error('Para finalizar la compra tiene que presionar aceptar'))
    }, 2000)
  })

}
const finalizarCompra = document.getElementById('finalizarCompra')
const agradecimiento = document.getElementById('agradecimiento')

finalizarCompra.addEventListener('click', () => {
  finalizarVenta()
  .then((response) => {
    console.log(response) 
    carritoID.innerHTML = ''
    alert(response)
    return carritoID.innerHTML += `
                                    <div class="agradecimiento">
                                        <p>¡Muchas Gracias por tu Compra!</p>
                                    </div> 
            ` 
   }) 
   
   .catch((err) =>  alert(err) )
})
