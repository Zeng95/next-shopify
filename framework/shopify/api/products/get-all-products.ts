import { http } from 'framework/shopify/utils/http';
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
    const { edges } = data.products;
    const products = edges.map(({ node: product }) => product);

    return products;
  } catch (err) {
    throw err;
  }
}

export { getAllProducts };
