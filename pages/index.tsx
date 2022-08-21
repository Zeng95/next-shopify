import { Layout } from 'components/common';
import { ProductCard } from 'components/product';
import { Grid, Hero } from 'components/ui';
import { getAllProducts } from 'framework/shopify/api/products';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products }, // By returning { props: { posts } }, the Home component will receive `products` as a prop at build time
    revalidate: 4 * 60 * 60 // In seconds
  };
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { products } = props;
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Hero
        headline="Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake."
      />
    </>
  );
}

Home.Layout = Layout;
