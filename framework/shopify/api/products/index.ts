import axios from 'axios';
import {
  getAllProductsQuery,
  http,
  normalizeProduct
} from 'framework/shopify/utils';
import { ProductConnection } from '../../schema';

type ServerResponseType = {
  products: ProductConnection;
};

type ServerDataType = {
  query: string;
};

async function getAllProducts() {
  try {
    const { data } = await http.post<ServerResponseType, ServerDataType>('/', {
      query: getAllProductsQuery()
    });
    const products = data.products.edges.map(({ node: product }) =>
      normalizeProduct(product)
    );
    return products;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data;
    }
    throw err;
  }
}

export { getAllProducts };
