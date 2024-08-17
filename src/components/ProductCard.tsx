import { Product } from "../redux/interface";
import React from "react";
import AddToCartBtn from "./AddtoCartBtn";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  let price = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.product.price);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-blue-500 ring-opacity-40 max-w-sm">
    <div className="mt-2 relative">
        <Image className="h-48 w-full object-contain mb-4" src={props.product.image} alt={props.product.title}/>
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{props.product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{props.product.description}</p>
        <div className="flex items-center justify-between">
            <span className="font-bold text-lg">{price}</span>
            <AddToCartBtn product={props.product}/>
        </div>
    </div>
</div>
    
  );
};

export default ProductCard;