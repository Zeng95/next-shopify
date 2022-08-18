interface ProductImage {
  url: string;
  alt?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  vendor: string;
  path: string;
  slug: string;
  images: ProductImage[];
}

export type { Product, ProductImage };
