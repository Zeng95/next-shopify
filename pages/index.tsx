import { getAllProducts } from 'framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div className="products">{products}</div>;
}

export const getStaticProps = () => {
  const products = getAllProducts();

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60 // In seconds
  };
};

export default Home;
