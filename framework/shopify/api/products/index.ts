import axios from 'axios';
import { http } from 'framework/shopify/utils/http';
import { normalizeProduct } from 'framework/shopify/utils/normalize';
import { ProductConnection } from '../../schema';
import { getAllProductsQuery } from '../../utils/queries/get-all-products';

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
