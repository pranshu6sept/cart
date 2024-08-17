import React, { useState } from "react";
import { Button } from "./Button";
import { validateQuantity } from "@/lib/quantityValidator";


interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtnCart = (props: Props) => {

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
      const newQuantity = parseInt(e.target.value);
      const validationResult = validateQuantity(newQuantity);
      
      if (!validationResult.isValid) {
          setError(validationResult.message || "Invalid quantity");
      } else {
          setError("");
          setQuantity(newQuantity);
      }
  };
  
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        onChange={handleChange}
        variant="danger"
        className="w-12 h-10"
        onClick={props.onDecrease}
        disabled={props.qty === 1}
      >
       -
      </Button>
      <p>{props.qty}</p>
      <Button
        onChange={handleChange}
        className="w-12 h-10"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};



export default QtyBtnCart;