import { Layout } from 'components/common';
import { ProductCard } from 'components/product';
import { getAllProducts } from 'framework/shopify/api/products';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
    revalidate: 4 * 60 * 60 // In seconds
  };
}

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

Home.Layout = Layout;

export default Home;
