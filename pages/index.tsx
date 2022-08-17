import { Layout } from 'components/common';
import { getAllProducts } from 'framework/shopify/api/products';
import { InferGetStaticPropsType } from 'next';

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Products</h1>
      <div>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

Home.Layout = Layout;

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
    revalidate: 4 * 60 * 60 // In seconds
  };
}

export default Home;
