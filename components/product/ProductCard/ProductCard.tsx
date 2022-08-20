import { Product } from 'framework/common/types/product';
import Image from 'next/image';
import Link from 'next/link';
import placeholderImage from 'public/product-image-placeholder.svg';
import styles from './ProductCard.module.scss';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className={styles.root}>
        <div className={styles.background}></div>

        <div className={styles.tag}>
          <h3 className={styles.title}>{product.name}</h3>
          <div className={styles.price}>$50.00 USD</div>
        </div>

        {product.images && product.images.length && (
          <Image
            src={product.images[0].url || placeholderImage}
            alt={product.name || 'Product Image'}
            height={540}
            width={540}
            quality="85" // Defaults to 75
            layout="responsive"
          />
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
