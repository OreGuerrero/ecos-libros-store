import Item from './Item';

function ItemList({ products }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
      gap: '2rem',
      alignItems: 'stretch'
    }}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;