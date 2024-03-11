export function isValidURL(urlString) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d+)?(\/\S*)?$/i;
  return urlPattern.test(urlString);
}
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
} 