// Base de datos local de libros clásicos
const productos = [
  {
    id: '1',
    name: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    price: 18000,
    category: 'Novela Clásica',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
    description: 'Sátira monumental sobre las novelas de caballería que narra las aventuras e ideales del hidalgo Don Quijote y su fiel escudero Sancho Panza en la España del siglo XVII.',
    stock: 12
  },
  {
    id: '2',
    name: 'La Divina Comedia',
    autor: 'Dante Alighieri',
    price: 15500,
    category: 'Poesía Épica',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
    description: 'Poema épico alegórico que recorre el viaje de Dante a través del Infierno, el Purgatorio y el Paraíso en busca de la luz divina y su amada Beatriz.',
    stock: 8
  },
  {
    id: '3',
    name: 'Crimen y Castigo',
    autor: 'Fiódor Dostoyevski',
    price: 16800,
    category: 'Novela Psicológica',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
    description: 'Obra cumbre que explora los dilemas morales, el sentimiento de culpa y la búsqueda de redención del estudiante Rodión Raskólnikov en San Petersburgo.',
    stock: 15
  },
  {
    id: '4',
    name: 'La Odisea',
    autor: 'Homero',
    price: 14200,
    category: 'Épica Griega',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
    description: 'Relato inmortal atribuido a Homero sobre la convulsa travesía de Odiseo en su viaje de regreso a la isla de Ítaca tras la finalización de la Guerra de Troya.',
    stock: 6
  }
];

/**
 * Función dinámica que busca un producto por su ID y devuelve una Promesa.
 * @param {string|number} productId - Identificador del producto a buscar.
 * @returns {Promise<Object>} Promesa que resuelve con el producto encontrado o rechaza con un Error.
 */
export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoEncontrado = productos.find(
        (item) => String(item.id) === String(productId)
      );

      if (productoEncontrado) {
        resolve(productoEncontrado);
      } else {
        reject(new Error(`No se encontró ningún producto con el ID: ${productId}`));
      }
    }, 800); // Simulación de latencia de red
  });
}