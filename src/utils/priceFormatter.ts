export function priceFormatter(price: number) {
  const formattedNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return formattedNumber;
}
