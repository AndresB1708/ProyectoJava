import { mostrarProductos } from "./funciones.js";
import { mostrarProductoSeleccionado } from "./funciones.js";
import { funcionFiltrar } from "./funciones.js";

const productos = [
    {   
        id: 1,
        nombre: 'Lenovo Legion 5i Pro Gen 6',
        precio: 1599999.00,
        tipo: 'Notebook',
        caracteristica: 'Rendimiento de nivel profesional',
        descripcion: 'Diseñado para causar devastación tanto dentro como fuera de la arena, el Legion 5i Pro (16" Intel) te ayudará a asegurarte la victoria. Viene equipado con procesadores Intel® Core™ de 11.ª generación y la tarjeta gráfica NVIDIA® GeForce RTX™ serie 30 diseñada para videojuegos de alta resolución con Legion AI Engine. La innovadora pantalla WQXGA de 16" diseñada para videojuegos proporciona un mejor campo visual, mientras que el sonido Nahimic 3D te ayuda a asestar tus golpes con una precisión milimétrica.',
        imagen1: '../images/note_1.jpg',
        imagen2: ''
    },
    {
        id: 2,
        nombre: 'Lenovo ThinkPad X1 Nano 3ra Gen',
        precio: 2499999.00,
        tipo: 'Notebook',
        caracteristica: 'El portátil gaming más potente de 16',
        descripcion: 'Nuestra laptop insignia para juegos es aún mejor con procesadores de 12va generación de Intel® Core™. Juega con la configuración de gráficos más alta con toda la potencia de la GPU NVIDIA® GeForce RTX™ serie 30. Capacidades de memoria de última generación con hasta 32 GB de RAM DDR5.        Obtén la mejor vista del mapa en una pantalla WXQGA de 16" con LED mini opcional. El siguiente paso en tecnología de refrigeración ha llegado con Coldfront 4.0',
        imagen1: '../images/note_2.jpg',
        imagen2: ''

    },

    {
        id: 3,
        nombre: 'Laptop Lenovo Legion 7i 7ma Gen',
        precio: 3299999.00,
        tipo: 'Notebook',
        caracteristica: 'Ultraliviana. Ultrapotente. Ultraposibilidades.',
        descripcion: 'Certificada Intel® Evo™ con hasta Intel® vPro® y procesamiento hasta Intel® Core™ de 13ra generación. Pantalla 2K de 13 con imágenes ricas en color, con o sin función táctil. Seguridad de vanguardia y pruebas MIL-SPEC para mayor fiabilidad. Barra de comunicaciones preparada para mejorar la colaboración. Cancelación de ruido basada en IA y Dolby Voice®. Compuesta por materiales reciclados con contenido postconsumo (PCC) y packaging sin plástico',
        imagen1: '../images/note_3.jpg',
        imagen2: ''
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A34',
        precio: 200000,
        tipo: 'Celular',
        caracteristica: '128gb 6gb Ram Awesome Silver.',
        descripcion: 'Con su potente procesador y memoria RAM de 6 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras. Máxima seguridad para que solo vos puedas acceder al equipo. Podrás elegir entre el sensor de huella dactilar para habilitar el teléfono en un toque, o el reconocimiento facial que permite un desbloqueo hasta un 30% más rápido. ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.',
        imagen1: '../images/phone1/img1.jpg',
        imagen2: ''
    },
    {
        id: 5,
        nombre: 'Samsung Galaxy S23 Ultra',
        precio: 865999,
        tipo: 'Celular',
        caracteristica: ' 12gb 256gb Color Green.',
        descripcion: 'Hacé que las noches sean más épicas con la cámara nocturna. Es un kit de nivel profesional que cabe en una mano. La cámara posterior triple y la cámara de selfie ofrecen hardware y software de cámara innovadores para que puedas capturar fácilmente una galería llena de contenido digno de compartir. Cada detalle, ahora es tuyo para que lo captures. Fotografiá sin parar. Siempre tendrás una galería de fotos nítidas y de alta calidad. Dentro de este sensor de alta resolución se encuentra Adaptive Pixel, que cambia los píxeles para adaptarse a la iluminación. Activá el mejorador de detalles antes de hacer las capturas. Mejorá de manera inteligente tus tomas al ajustar las sombras y los tonos claros.',
        imagen1: '../images/phone2/img1.jpg',
        imagen2: ''
    },
    {
        id: 6,
        nombre: 'Apple iPhone 14 Pro Max',
        precio: 206999,
        tipo: 'Celular',
        caracteristica: '(1 TB) - Morado oscuro',
        descripcion: 'El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. Y viene con Detección de Choques(1), una funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.',
        imagen1: '../images/phone3/img1.jpg',
        imagen2: ''
    },
    {
        id: 7,
        nombre: 'Xiaomi Redmi Note 11',
        precio: 442518,
        tipo: 'Celular',
        caracteristica: '(Snapdragon) Dual SIM 128 GB gris grafito 6 GB RAM.',
        descripcion:'Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.43". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos. ¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.',
        imagen1: '../images/phone4/img1.jpg',
        imagen2: ''
    },
];

const tipoProducto = [
    { id: 1, nombre: "notebook" },
    { id: 2, nombre: "celular" },

    // Agrega más categorías según sea necesario
];

const $ = document;

const containerProductos = document.getElementById('productos')
productos.map((producto) => {
    mostrarProductos(producto, containerProductos)
})

const mainProductoSeleccionado = () => {
    let botones = document.querySelectorAll('.btnInfo')
    botones.forEach((boton) =>{
        boton.addEventListener('click', (evento) => {
            mostrarProductoSeleccionado(evento.target.id, productos)
        } )

    })
}
const filtrarNote = document.getElementById('filterNotebook')
filtrarNote.addEventListener('click', () =>{  
    funcionFiltrar('Notebook', containerProductos, productos)
})
const filtrarTelefono = document.getElementById('filterTelefonos')
filtrarTelefono.addEventListener('click', () =>{
    funcionFiltrar('Celular', containerProductos, productos)
})

 window.addEventListener('DOMContentLoaded', () => {
     mainProductoSeleccionado()
 })
