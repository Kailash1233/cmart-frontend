import React, { SyntheticEvent, useState, ChangeEvent, FormEvent } from "react";
import Header from "./includes/Header";
import Banner from "../components/Banner";
import Footer from "./includes/Footer";
import { getTotal, getItem } from "../Utils/Generals";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useCreateCommandMutation } from "../store/apiquery/CommandApiSlice";
import LoadingButton from "../components/LoadingButton";
import axios from "axios";
import { useAsyncError, useNavigate } from "react-router-dom";
import { deleteProductInCart } from "../store/productSlice";

const Checkout = () => {
  const productCart = useAppSelector((state) => state.productCart);
  const [createcom, result] = useCreateCommandMutation();
  const dispatch = useAppDispatch();
  const total = getTotal();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    orderNotes: "",
    addressSkip: false,
  });

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const submitCheckout = async (e: FormEvent) => {
    e.preventDefault();
    const commandData = {
      products: productCart.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      })),
      total,
    };
    if (productCart.length === 0) {
      alert("Add product to the cart");
    }
    try {
      if (
        formData.firstName != "" &&
        formData.lastName != "" &&
        formData.address != "" &&
        formData.email != "" &&
        formData.location != "" &&
        formData.phone != ""
      ) {
        const res = await axios.post(
          `${import.meta.env.VITE_API}/customer-details`,
          {
            data: {
              Name: `${formData.firstName} ${formData.lastName}`,
              Email: formData.email,
              PhoneNumber: formData.phone,
              Location: formData.location,
              Address: formData.address,
              Totalprice: total, // Use calculated total or default value
              ProductDetails: {
                Product: commandData.products,
              },
            },
          }
        );
        console.log("Response:", res.data);
        console.log("Form submitted:", formData);
        alert("your order is placed successfully");
        nav("/");
      } else {
        alert("Fill all the information");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert(err);
    }
  };

  return (
    <>
      <Header />
      <Banner page="Checkout" path={["Home", "Checkout"]} />
      <div className="checkout-page row gap-3 justify-content-center px-3 px-sm-5 my-5 text-black">
        <form
          onSubmit={submitCheckout}
          className="checkout-service p-3 bg-white col-12 col-lg-8 border border-1"
        >
          <h4 className="fw-bold">Billing Details</h4>
          <hr />
          <div className="d-flex gap-2 mt-5">
            <label className="w-50">
              <span>First Name *</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
            <label className="w-50">
              <span>Last Name *</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
          </div>
          <div className="my-4">
            <label className="w-100">
              <span>Email *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
          </div>
          <div>
            <label className="w-100">
              <span>Phone *</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
          </div>
          <div className="my-4">
            <label className="w-100">
              <span>Location *</span>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                value={formData.location}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
          </div>
          <div>
            <label className="w-100">
              <span>Address *</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control w-100 rounded-0 p-2"
                required
              />
            </label>
          </div>
          <div className="my-4">
            <label className="d-flex gap-2 w-100">
              <input
                type="checkbox"
                name="addressSkip"
                checked={formData.addressSkip}
                onChange={handleCheckboxChange}
              />
              <span>Ship to a different address?</span>
            </label>
          </div>
          <div>
            <label>
              <span>Order notes (Optional)</span>
              <textarea
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                cols={100}
                rows={10}
                className="w-100 p-2 border"
              ></textarea>
            </label>
          </div>
        </form>
        <div className="col-12 col-lg-3 checkout-validate">
          <div className="bg-white p-3 border border-1">
            <h5 className="fw-bold">Checkout Summary</h5>
            <hr />
            <div>
              {productCart.map((product) => (
                <div
                  className="mt-4 mb-3"
                  key={product.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                >
                  <span>{product.name}</span>
                  <span>QTS: {product.quantity}</span>
                  <span>price: ₹{product.price}</span>
                </div>
              ))}
            </div>
            <div className="opacity-75">
              <div>
                <span className="fw-bold">Subtotal :</span>
                <span className="float-end opacity-75">₹{total}</span>
              </div>
              <hr />
              <div>
                <span className="fw-bold">Total :</span>
                <span className="float-end opacity-75">₹{total}</span>
              </div>
              <hr />
            </div>
            <form
              onSubmit={submitCheckout}
              style={{
                margin: "20px 0 20px 0",
                padding: "3px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LoadingButton loadingState={result.isLoading}>
                <button type="submit" className="fd-btn w-full text-center">
                  PLACE ORDER
                </button>
              </LoadingButton>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
