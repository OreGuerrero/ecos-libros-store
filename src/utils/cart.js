export function getCartItemTotal(item) {
  return item.price * item.quantity;
}

export function getCartTotal(cart) {
  return cart.reduce((total, item) => total + getCartItemTotal(item), 0);
}
