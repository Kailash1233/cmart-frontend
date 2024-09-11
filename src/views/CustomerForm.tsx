import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import axios from "axios";
import { getTotal } from "../Utils/Generals"; // Assuming this is for calculating total price

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;
  address: string;
}

const CustomerForm: React.FC = () => {
  const productCart = useAppSelector((state) => state.productCart);
  console.log(productCart)
  const total = getTotal();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/customer-details`,
        {
          data: {
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: formData.email,
            PhoneNumber: formData.phoneNumber,
            Location: formData.location,
            Address: formData.address,
            Totalprice: total, // Use calculated total or default value
            ProductDetails: {
              Product: "Roof sheet 8ft",
              quantity: "20",
            },
          },
        }
      );
      console.log("Response:", res.data);
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ color: "black" }}>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label style={{ color: "black" }}>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">PlaceOrder</button>
    </form>
    
  );
};

export default CustomerForm;
