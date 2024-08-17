"use client";
import { Product } from "../redux/interface";
import React, { useState } from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "../redux/reducers/cartReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../redux/store";
import { Button } from "./Button";
import { toast } from 'react-hot-toast';
import QtyBtnCart from "./QtyBtnCart";


interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {

  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(increment(props.product));
    toast.success('Product added to cart!');
  };

  const handleDecrease = () => {
    dispatch(decrement(props.product));
    toast.success('Product quantity decreased');
  };

  const handleIncrease = () => {
    dispatch(increment(props.product));
    toast.success('Product quantity increased');
  };


  if (!qty)
    return (
      <div className="flex justify-center">
        <Button
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QtyBtnCart
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      qty={qty}
    />
  );
};

export default AddToCartBtn;