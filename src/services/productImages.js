const productImages = {
  NtlLCf1qNRGITXNqA8YD: '/cover-don-quijote.jpg',
  'la-divina-comedia': '/cover-divina-comedia.jpg',
  'crimen-y-castigo': '/cover-crimen-y-castigo.jpg',
  'la-odisea': '/cover-la-odisea.jpg',
  'orgullo-y-prejuicio': '/cover-orgullo-y-prejuicio.jpg'
};

export function withProductImage(product) {
  return {
    ...product,
    img: productImages[product.id] || product.img
  };
}