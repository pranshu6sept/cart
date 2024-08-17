export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    qty: number;
}

export interface CartItem {
    product: Product;
    qty: number;
  }