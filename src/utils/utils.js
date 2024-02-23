export function isValidURL(urlString) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d+)?(\/\S*)?$/i;
  return urlPattern.test(urlString);
}
