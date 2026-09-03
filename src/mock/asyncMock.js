// Array de productos con la estructura requerida por el checkpoint
const products = [
  {
    id: '1',
    name: 'Don Quijote de la Mancha',
    price: 24000,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
    stock: 12,
    description: 'Edición especial ilustrada de la obra cumbre de Miguel de Cervantes.'
  },
  {
    id: '2',
    name: 'La Divina Comedia',
    price: 22000,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
    stock: 8,
    description: 'El poema épico monumental de Dante Alighieri a través del Infierno, Purgatorio y Paraíso.'
  },
  {
    id: '3',
    name: 'Crimen y Castigo',
    price: 21500,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
    stock: 15,
    description: 'La célebre novela psicológica de Fiódor Dostoyevski.'
  },
  {
    id: '4',
    name: 'La Odisea',
    price: 19800,
    category: 'Historia y Arqueología',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
    stock: 10,
    description: 'El poema épico griego de Homero sobre el regreso de Odiseo a Ítaca.'
  },
  {
    id: '5',
    name: 'Orgullo y Prejuicio',
    price: 18500,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60',
    stock: 20,
    description: 'La obra maestra de Jane Austen sobre la sociedad y las emociones humanas.'
  }
];

// Función que simula una petición asíncrona a un backend
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000); // 2000 ms = 2 segundos de retardo simulado
  });
};