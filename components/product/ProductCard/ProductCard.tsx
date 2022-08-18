import { Product } from 'framework/shopify/schema';
import Link from 'next/link';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div>
        <h3>{product.title}</h3>
        <span>$50.00 USD</span>
      </div>
    </Link>
  );
}

export default ProductCard;
