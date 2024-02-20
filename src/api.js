
const fetchData = async ({url}) => {
  try {
    const response = await fetch(`'https://fakestoreapi.com/${url}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(`Oh no, ocurrió un error: ${error}`);
  }
};
export default fetchData