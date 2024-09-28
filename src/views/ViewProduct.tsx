// import React, { useEffect } from 'react'
// import Footer from './includes/Footer';
// import Header from './includes/Header';
// import Banner from '../components/Banner';
// import Spinner from '../components/Spinner';
// import NotFound from "../components/404";
// import ProductDetails from '../components/ProductDetails';
// import { useParams } from 'react-router-dom';
// import { useGetProductQuery } from "../store/apiquery/productApiSlice"

// const ViewProduct = () => {

//   const params = useParams()
//   const { isLoading, data : details , isSuccess, isError } = useGetProductQuery(params.id || '');

//   return (
//     <>
//         <Header />
//         <Banner page="Shop Details" path={["Home", "Shop Details"]}/>
//         {
//           !isLoading && isSuccess ? <ProductDetails product={details.data}/> :
//           (isError ? <NotFound /> : <Spinner />)
//         }
//         <Footer />
//     </>
//   )
// }

// export default ViewProduct;

import React, { useEffect, useState } from "react";
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import Banner from "../components/Banner";
import Spinner from "../components/Spinner";
import NotFound from "../components/404";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewProduct = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          // `${import.meta.env.VITE_API}/products/${id}?populate=*`
          "https://kvm-content-manager.vercel.app/api/products/${id}?populate=*"
        );
        setDetails(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  return (
    <>
      <Header />
      <Banner page="Shop Details" path={["Home", "Shop Details"]} />
      {!isLoading && details ? (
        <ProductDetails product={details} />
      ) : isError ? (
        <NotFound />
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
};

export default ViewProduct;
