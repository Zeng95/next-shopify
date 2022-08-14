import { getAllProducts } from 'framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.title}</h1>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60 // In seconds
  };
};

export default Home;
