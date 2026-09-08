import { useState } from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css'; // Importación de los estilos CSS

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log(`Se agregaron ${quantity} unidades del libro: ${product.name}`);
  };

  return (
    <article className="detail-card">
      {/* Columna 1: Imagen principal */}
      <div className="detail-image-container">
        <img 
          src={product.img} 
          alt={product.name} 
          className="detail-image"
        />
      </div>

      {/* Columna 2: Información detallada */}
      <div className="detail-info">
        <div>
          <span className="detail-category">
            {product.category}
          </span>

          <h2 className="detail-title">
            {product.name}
          </h2>

          <p className="detail-price">
            $ {product.price?.toLocaleString('es-AR')} ARS
          </p>

          <p className="detail-description">
            {product.description}
          </p>

          <p className={`detail-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `Stock disponible: ${product.stock} unidades` : 'Sin stock disponible'}
          </p>
        </div>

        {/* Reutilización del contador con el stock dinámico */}
        <div>
          {quantityAdded > 0 ? (
            <p className="detail-success-msg">
              ✓ ¡Agregaste {quantityAdded} ejemplares al carrito!
            </p>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;