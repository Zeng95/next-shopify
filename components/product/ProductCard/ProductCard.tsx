import { Product } from 'framework/shopify/schema';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  console.log(product);
  return <div>Product Card</div>;
}

export default ProductCard;
