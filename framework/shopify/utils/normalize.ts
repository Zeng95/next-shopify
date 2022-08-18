import { ImageConnection, Product as ShopifyProduct } from '../schema';

export function normalizeProductImages({ edges }: ImageConnection) {
  return edges.map(({ node: image }) => {
    const { originalSrc: url, ...rest } = image;
    return {
      url: `/images/${url}`,
      ...rest
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct) {
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
    vendor,
    description,
    name,
    path: `/${handle}`, // http://localhost:3000/products/cool-hat
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    ...rest
  };

  return product;
}
