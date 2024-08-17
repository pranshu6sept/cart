"use client";
import CartItemCard from "../../../components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../../redux/reducers/cartReducer";
import { useAppSelector } from "../../../redux/store";
import Link from "next/link";
import DiscountCodeInput from "@/components/DiscountCodeInput";




const CartPage = () => {
  const [discountPercentage, setDiscountPercentage] = React.useState<number>(0);

  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);
  let price = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);
  let shipping = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(8);
  // let discount = .1*(totalPrice)
  // let discountinUsd = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(discount);
  // let total = totalPrice + 8 - discount
  // let totalinUsd = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);

  
    const discount = (discountPercentage * totalPrice/100);
    const discountinUsd = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(discount);

    const total = totalPrice + 8  - discount;
    const totalinUsd = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);

    const handleDiscountApply = (discountPercentage: number) => {
        // Apply the discount percentage
        setDiscountPercentage(discountPercentage);
    };

  
  

  return (
    <div className="p-2 flex flex-col gap-y-2 ">
      {cartItems.map((item,index) => (
        <CartItemCard key={index} cartItem={item} />
      ))}
      <div className="mt-6 mx-4 space-y-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">{price}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">{shipping}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Discount <span>(10%)</span></p>
              <p className="text-lg font-semibold text-gray-900">-{discountinUsd}</p>
            </div>
            <DiscountCodeInput onDiscountApply={handleDiscountApply}/>
      </div>
      
      <div className="mt-6 mx-4 flex items-center justify-between p-4">
            <p className="text-sm font-medium text-gray-900">Total Price</p>
            <p className="text-2xl font-semibold text-gray-900">{totalinUsd}</p>
      </div>
      <div className="mt-6 text-center mx-2">
      <Link className="ml-auto mr-4 flex items-center text-lg text-blue-700 hover:text-blue-900 transition duration-200 ease-in-out" href="/checkout">
        <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
          Place Order
        </button>
      </Link> 
      </div>
    </div>
  );
};

export default CartPage;