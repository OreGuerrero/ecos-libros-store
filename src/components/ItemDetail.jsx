import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/useCart';
import '../styles/ItemDetail.css'; // Importación de los estilos CSS

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  // Protección defensiva para evitar errores si product aún no cargó
  if (!product) {
    return null;
  }

  const { name, price, img, category, description, stock } = product;

  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(quantity);
  };

  return (
    <article className="detail-card">
      {/* Columna 1: Imagen principal */}
      <div className="detail-image-container">
        <img 
          src={img} 
          alt={name} 
          className="detail-image"
        />
      </div>

      {/* Columna 2: Información detallada */}
      <div className="detail-info">
        <div>
          <span className="detail-category">
            {category}
          </span>

          <h2 className="detail-title">
            {name}
          </h2>

          <p className="detail-price">
            $ {typeof price === 'number' ? price.toLocaleString('es-AR') : price} ARS
          </p>

          <p className="detail-description">
            {description}
          </p>

          <p className={`detail-stock ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {stock > 0 ? `Stock disponible: ${stock} unidades` : 'Sin stock disponible'}
          </p>
        </div>

        {/* Reutilización del contador con el stock dinámico */}
        <div>
          {quantityAdded > 0 ? (
            <p className="detail-success-msg" role="status">
              ✓ ¡Agregaste {quantityAdded} {quantityAdded === 1 ? 'ejemplar' : 'ejemplares'} al carrito!
            </p>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemDetail;