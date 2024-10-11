import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { ProductType } from "./ProductCart";
import { cartKeyName } from "../Utils/Generals";
import { setProductQuantity } from "../store/productSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

type OptionsType = {
  product: ProductType;
  initialValue?: number;
  // step?: number;
  min?: number;
  max?: number;
};

const Numberquantity = ({
  product,
  initialValue = 1,
  min,
  max,
}: OptionsType) => {
  const [quantity, setQuantity] = useState(product.quantity ?? initialValue);
  const [type, setType] = useState<number>(1);
  const dispatch = useAppDispatch();
  let step = type;
  const increment = () => {
    if (max && quantity >= max) {
      return quantity;
    }
    setQuantity((state) => state + step);
    const quantitySaved = quantity + type;
    dispatch(setProductQuantity({ product, quantitySaved }));
  };

  const decrement = () => {
    if (min && quantity <= min) {
      return 1;
    }
    setQuantity((state) => state - step);
    const quantitySaved = quantity - type;
    dispatch(setProductQuantity({ product, quantitySaved }));
  };
  return (
    <div className="d-flex">
      <div
        className="fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3"
        onClick={decrement}
      >
        <i className="bi" style={{ lineHeight: "40px" }}>
          -
        </i>
      </div>
      <div className="bg-white px-4">
        <span style={{ lineHeight: "40px" }}>{quantity}</span>
      </div>
      <div
        className="fd-bg-primary py-1 px-3 text-white cursor-pointer rounded-3"
        onClick={increment}
      >
        <i className="bi bi-plus" style={{ lineHeight: "40px" }}></i>
      </div>
      <select
        name="CountType"
        onChange={(e) => setType(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
    </div>
  );
};

export default Numberquantity;
