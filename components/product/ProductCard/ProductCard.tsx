import { Product } from 'framework/common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import placeholderImage from 'public/product-image-placeholder.svg';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <div>
          <h3>{product.name}</h3>
          <span>$50.00 USD</span>
        </div>

        {product.images && product.images.length && (
          <Image
            src={product.images[0].url || placeholderImage}
            alt={product.name || 'Product Image'}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
