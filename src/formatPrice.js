export function formatPrice(price) {
  const amount = Number(price);
  const formattedAmount = Number.isFinite(amount)
    ? amount.toLocaleString('es-AR')
    : String(price ?? 0);

  return `$ ${formattedAmount} ARS`;
}