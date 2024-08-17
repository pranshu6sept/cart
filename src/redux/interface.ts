import { Key } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    qty: number;
}

export interface CartItem {
    id: Key | null | undefined;
    uniqueProperty: Key | null | undefined;
    product: Product;
    qty: number;
  }