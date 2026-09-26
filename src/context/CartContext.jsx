import { useState } from 'react';
import { CartContext } from './cart-context';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!Number.isInteger(quantity) || quantity <= 0) return;

    setCart((previousCart) => {
      const existingItem = previousCart.find((product) => product.id === item.id);

      if (existingItem) {
        return previousCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      }

      return [...previousCart, { ...item, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  const clear = () => setCart([]);
  const isInCart = (id) => cart.some((item) => item.id === id);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}