import { Product, ProductImage } from 'framework/common/types/product';
import { ImageConnection, Product as ShopifyProduct } from '../schema';

export function normalizeProductImages(
  images: ImageConnection
): ProductImage[] {
  return images.edges.map(({ node: image }) => {
    const { originalSrc: url, ...rest } = image;
    return {
      url: `/images/${url}`,
      ...rest
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    description,
    vendor,
    path: `/${handle}`, // http://localhost:3000/products/cool-hat
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    ...rest
  };

  return product;
}
