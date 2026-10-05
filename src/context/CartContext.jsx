import { useState } from 'react';
import { CartContext } from './cart-context';
import { getCartTotal } from '../utils/cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!Number.isInteger(quantity) || quantity <= 0) return 0;

    const existingItem = cart.find((product) => product.id === item.id);
    const availableStock = Number.isInteger(item.stock)
      ? Math.max(0, item.stock - (existingItem?.quantity ?? 0))
      : quantity;
    const quantityToAdd = Math.min(quantity, availableStock);

    if (quantityToAdd === 0) return 0;

    setCart((previousCart) => {
      const currentItem = previousCart.find((product) => product.id === item.id);
      const latestAvailableStock = Number.isInteger(item.stock)
        ? Math.max(0, item.stock - (currentItem?.quantity ?? 0))
        : quantity;
      const latestQuantityToAdd = Math.min(quantity, latestAvailableStock);

      if (latestQuantityToAdd === 0) return previousCart;

      if (currentItem) {
        return previousCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + latestQuantityToAdd }
            : product
        );
      }

      return [...previousCart, { ...item, quantity: latestQuantityToAdd }];
    });

    return quantityToAdd;
  };

  const removeItem = (id) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (!Number.isInteger(quantity) || quantity <= 0) return;

    setCart((previousCart) => previousCart.map((item) => {
      if (item.id !== id || (Number.isInteger(item.stock) && quantity > item.stock)) {
        return item;
      }

      return { ...item, quantity };
    }));
  };

  const clear = () => setCart([]);
  const isInCart = (id) => cart.some((item) => item.id === id);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = getCartTotal(cart);

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      isInCart,
      totalItems,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}