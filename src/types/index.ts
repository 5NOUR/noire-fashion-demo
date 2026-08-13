export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSize {
  name: string;
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  collection: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  createdAt: string;
  details?: string[];
  shippingInfo?: string;
  returnPolicy?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  products: string[]; // product ids
}

export interface LookbookItem {
  id: string;
  title: string;
  description: string;
  image: string;
  productIds?: string[];
  position?: { x: number; y: number };
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}
