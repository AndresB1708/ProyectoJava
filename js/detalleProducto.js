import { mostrarDetalleProducto } from "./funciones.js";
import { agregarCarrito } from "./funciones.js";

const detalleProducto = document.getElementById('detalleProducto')
mostrarDetalleProducto(detalleProducto)

const botonCarrito = document.querySelector('.btnCarrito')
botonCarrito.addEventListener('click', () =>{
    agregarCarrito()
    //alert('presionando boton')
})
    
    
