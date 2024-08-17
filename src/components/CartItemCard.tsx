import { CartItem } from "../redux/interface";
import Image from "next/image";
import React from "react";
import {
  decrement,
  increment,
  remove,
} from "../redux/reducers/cartReducer";
import { useAppDispatch } from "../redux/store";
import QtyBtnCart from "./QtyBtnCart";
import { Button } from "./Button";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-lg shadow-lg">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-center px-2 py-2 border shadow-sm">
      <div className="flex justify-center sm:justify-start">
        <Image
          src={cartItem.product.image}
          width={200}
          height={150}
          alt={cartItem.product.title}
          className="rounded-md"
        />
      </div>
      <p className="text-slate-600 text-center">
        {cartItem.product.title}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <p>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtnCart
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
        <Button onClick={()=>dispatch(remove(cartItem.product))}>
          Remove
        </Button>
      </div>
      <p className="text-center">
        {cartItem.qty * cartItem.product.price} $
      </p>
    </div>
  </div>
  
  );
};

export default CartItemCard;