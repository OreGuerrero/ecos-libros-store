// Array de productos con datos completos
export const products = [
  {
    id: '1',
    name: 'Don Quijote de la Mancha',
    price: 24000,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60',
    stock: 12,
    description: 'Edición especial ilustrada de la obra cumbre de Miguel de Cervantes. Publicada originalmente en dos partes (1605 y 1615), esta sátira de las novelas de caballería es considerada la primera novela moderna y la obracumbre de la literatura en español.'
  },
  {
    id: '2',
    name: 'La Divina Comedia',
    price: 22000,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60',
    stock: 8,
    description: 'El poema épico monumental de Dante Alighieri a través del Infierno, Purgatorio y Paraíso. Una obra alegórica trascendental que resume la cosmovisión religiosa, filosófica y política del Medioevo tardío.'
  },
  {
    id: '3',
    name: 'Crimen y Castigo',
    price: 21500,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60',
    stock: 15,
    description: 'La célebre novela psicológica de Fiódor Dostoyevski que profundiza en los dilemas morales, la culpa y la redención del joven estudiante Rodión Raskólnikov en San Petersburgo.'
  },
  {
    id: '4',
    name: 'La Odisea',
    price: 19800,
    category: 'Historia y Arqueología',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=60',
    stock: 10,
    description: 'El poema épico griego de Homero sobre el regreso de Odiseo a Ítaca tras la Guerra de Troya. Un viaje repleto de peligros, criaturas míticas y lecciones universales sobre la astucia y la perseverancia.'
  },
  {
    id: '5',
    name: 'Orgullo y Prejuicio',
    price: 18500,
    category: 'Obras Clásicas',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60',
    stock: 20,
    description: 'La obra maestra de Jane Austen sobre la sociedad, las relaciones familiares y las dinámicas entre Elizabeth Bennet y el Sr. Darcy en la Inglaterra rural de principios del siglo XIX.'
  }
];

// 1. Promesa para obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

// 2. Función dinámica que busca un producto específico por ID y devuelve una Promesa
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === String(productId));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000); // 1 segundo de retardo simulado
  });
};