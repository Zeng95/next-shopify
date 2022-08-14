import axios from 'axios';

async function fetchAPI() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getAllProducts() {
  try {
    const products = await fetchAPI();
    return products;
  } catch (err) {
    console.error(err);
  }
}
