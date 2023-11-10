import { mostrarDetalleProducto } from "./funciones.js";
import { agregarCarrito } from "./funciones.js";

const detalleProducto = document.getElementById('detalleProducto')
mostrarDetalleProducto(detalleProducto)

const botonCarrito = document.querySelector('.btnCarrito')
botonCarrito.addEventListener('click', () =>{
    agregarCarrito()
    //alert('presionando boton')
})
    
    

    // console.log(JSON.parse( localStorage.getItem('carrito')));
    
    //arrito = JSON.parse( localStorage.getItem('carrito')) || []
    //carrito.length > 0 ? carrito_contador.innerHTML = carrito.length : carrito_contador.innerHTML = 0
// document.addEventListener('DOMContentLoaded', () => {
  
//     const botonCarrito = document.getElementsByClassName('btnCarrito')
//     // console.log(JSON.parse( localStorage.getItem('carrito')));
//     botonCarrito.addEventListener('click', () =>{
//         //agregarCarrito()
//         alert('presionando boton')
//     })
//     //arrito = JSON.parse( localStorage.getItem('carrito')) || []
//     //carrito.length > 0 ? carrito_contador.innerHTML = carrito.length : carrito_contador.innerHTML = 0
//   })

