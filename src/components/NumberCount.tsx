import React, { useState } from "react";
import { ProductType } from "./ProductCart";
import { setProductQuantity } from "../store/productSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

type Props = {
  product: ProductType;
  initialValue?: number;
  min?: number;
  max?: number;
};

const NumberQuantity = ({
  product,
  initialValue = 1,
  min = 1,
  max = 1000,
}: Props) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(
    product.quantity ?? initialValue
  );
  const [inputValue, setInputValue] = useState<string>(quantity.toString());
  const [step, setStep] = useState<number>(1);

  const updateQuantity = (newQty: number) => {
    const clamped = Math.max(min, Math.min(max, newQty));
    setQuantity(clamped);
    setInputValue(clamped.toString());
    dispatch(setProductQuantity({ product, quantitySaved: clamped }));
  };

  const increment = () => updateQuantity(quantity + step);
  const decrement = () => updateQuantity(quantity - step);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    const parsed = parseInt(val);
    if (!isNaN(parsed)) {
      setQuantity(parsed); // Allow temp update without dispatch
    }
  };

  const handleInputBlur = () => {
    const parsed = parseInt(inputValue);
    if (!isNaN(parsed)) {
      updateQuantity(parsed);
    } else {
      updateQuantity(initialValue); // fallback to default
    }
  };

  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <button
        className="btn btn-outline-primary"
        onClick={decrement}
        disabled={quantity <= min}
        title="Decrease"
      >
        <i className="bi bi-dash"></i>
      </button>

      <input
        type="text"
        inputMode="numeric"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="form-control text-center"
        style={{ width: "80px" }}
      />

      <button
        className="btn btn-outline-primary"
        onClick={increment}
        disabled={quantity >= max}
        title="Increase"
      >
        <i className="bi bi-plus"></i>
      </button>

      <div className="ms-2 d-flex align-items-center">
        <label className="me-2 small fw-semibold mb-0">Step</label>
        <select
          className="form-select form-select-sm"
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value))}
          style={{ width: "80px" }}
        >
          {[1, 5, 10, 25, 50, 100].map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NumberQuantity;
