import { Product as ShopifyProduct } from '../schema';

export function normalizeProduct(productNode: ShopifyProduct) {
  const { id, title: name, handle, vendor, description, ...rest } = productNode;

  const product = {
    id,
    vendor,
    description,
    name,
    path: `/${handle}`, // http://localhost:3000/products/cool-hat
    slug: handle.replace(/^\/+|\/+$/g, ''),
    ...rest
  };

  return product;
}
