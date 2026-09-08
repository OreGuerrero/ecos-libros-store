import Item from './Item';
import '../styles/ItemList.css';

function ItemList({ products = [] }) {
  return (
    <div className="item-list-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;