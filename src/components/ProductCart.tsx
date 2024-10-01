// import React from "react";
// import Reviews from "./Reviews";
// import { Link } from "react-router-dom";
// import AddToCart from "./AddToCart";
// import AddToWishlist from "./AddToWishlist";
// import { link } from "../Utils/Generals";

// export type ProductType = {
//   id: number;
//   img: string;
//   reviews: number;
//   name: string;
//   price: number;
//   reduction?: string;
//   type?: string;
//   desc?: string;
//   quantity?: number;
//   total_quantity: number;
//   categorie_id?: number;
//   attributes?: any;
// };

// const ProductCart = (props: ProductType) => {
//   const myurl = props.img;
//   const url = `https://capable-blessing-440f216214.strapiapp.com${myurl}`;
//   return props.type === "list" ? (
//     <div
//       className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart"
//       style={{ minHeight: "250px" }}
//     >
//       {!props.reduction ? (
//         <a className="position-absolute top-0 start-0 fd-btn p-custorm z-1">
//           SALE
//         </a>
//       ) : (
//         <a className="position-absolute top-0 start-0 fd-btn-red z-1">
//           {props.reduction}
//         </a>
//       )}
//       <div className="d-flex gap-3">
//         <div className="position-relative h-100 col-3 product-img">
//           <img src={link(props.img)} alt={props.name} className="w-100 h-50" />
//         </div>
//         <div className="w-75 pt-3">
//           <div>
//             <Link
//               to={`/product/${props.id}`}
//               className="product-name my-2 fw-bold text-dark"
//             >
//               {props.name}
//             </Link>
//           </div>
//           <div className="d-flex my-2">
//             <Reviews rating={props.reviews} />
//           </div>

//           <p className="desc fw-bold opacity-50">{props.desc}</p>
//           <div className="d-flex gap-2">
//             <AddToCart product={props} />
//             <div>
//               <Link to={`/product/${props.id}`} className="fd-btn rounded-3">
//                 <i className="bi bi-eye"></i>
//               </Link>
//             </div>
//             <div>
//               <AddToWishlist product={props} classSup="rounded-3" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div
//       className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart"
//       style={{ height: "400px" }}
//     >
//       <div className="position-relative h-75 product-img">
//         <img src={link(props.img)} alt={props.name} className="w-100 h-100" />
//         <div
//           className="show d-none position-absolute w-100 animate__animated animate__fadeIn"
//           style={{ bottom: "10%" }}
//         >
//           <AddToCart
//             product={props}
//             classSup="bg-white fd-color-primary fd-hover-bg-primary d-block w-75 mx-auto px-3 py-2"
//           />
//         </div>
//       </div>
//       {!props.reduction ? (
//         <a
//           className="position-absolute top-0 start-0 fd-btn"
//           style={{ padding: "5px 20px" }}
//         >
//           SALE
//         </a>
//       ) : (
//         <a
//           className="position-absolute top-0 start-0 fd-btn-red"
//           style={{ padding: "5px 20px" }}
//         >
//           {props.reduction}
//         </a>
//       )}
//       <AddToWishlist
//         product={props}
//         classSup="position-absolute rounded-5"
//         supStyle={{ padding: "5px 10px", top: "10%", right: "10%" }}
//       />
//       <Link
//         to={`/product/${props.id}`}
//         className="show position-absolute fd-btn rounded-5 d-none animate__animated animate__fadeInRight"
//         style={{ padding: "5px 10px", top: "20%", right: "10%" }}
//       >
//         <i className="bi bi-eye"></i>
//       </Link>
//       <div className="text-center">
//         <Link
//           to={`/product/${props.id}`}
//           className="product-name my-2 fw-bold text-dark"
//         >
//           {props.name}
//         </Link>
//       </div>
//       <div className="">
//         <div
//           className="d-flex justify-content-center"
//           style={{ fontSize: "20px", marginTop: "0", paddingTop: "0" }} // Ensuring no top gap
//         >
//           ₹{props.price}
//         </div>
//         {/* <div
//           className="d-flex justify-content-center"
//           style={{ fontSize: "12px", marginTop: "0", paddingTop: "0" }} // Smaller font size for description
//         >
//           {props.desc}
//         </div> */}
//       </div>

//       <div className="d-flex justify-content-center">
//         <Reviews rating={props.reviews} />
//       </div>
//     </div>
//   );
// };

// export default ProductCart;

import React from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import { link } from "../Utils/Generals";

export type ProductType = {
  id: number;
  img: string;
  reviews: number;
  name: string;
  price: number;
  reduction?: string;
  type?: string;
  desc?: string;
  quantity?: number;
  total_quantity: number;
  categorie_id?: number;
  attributes?: any;
  data?:any
};

const ProductCart = (props: ProductType) => {
  return (
    <div
      className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart"
      style={{
        height: "320px", // Adjusted to make the card smaller
        padding: "10px", // Added padding for better layout
      }}
    >
      <Link to={`/product/${props.id}`} className="product-link">
        <div className="position-relative h-60 product-img">
          <img
            src={link(props.img)}
            alt={props.name}
            className="w-100 h-100"
            style={{
              objectFit: "contain",
              maxHeight: "150px", // Reduced image size for smaller card
            }}
          />
        </div>
        {!props.reduction ? (
          <span
            className="position-absolute top-0 start-0 fd-btn"
            style={{
              padding: "3px 15px",
              fontSize: "18px", // Adjusted size for smaller card
            }}
          >
            SALE
          </span>
        ) : (
          <span
            className="position-absolute top-0 start-0 fd-btn-red"
            style={{
              padding: "3px 15px",
              fontSize: "10px", // Adjusted size for smaller card
            }}
          >
            {props.reduction}
          </span>
        )}
        <div className="text-center mt-2">
          <h6
            className="product-name fw-bold text-dark"
            style={{
              fontSize: "16px", // Smaller text size for name
              lineHeight: "1.2",
            }}
          >
            {props.name}
          </h6>
        </div>
        <div
          className="d-flex justify-content-center text-black"
          style={{ fontSize: "16px", marginTop: "5px" }} // Reduced price font size
        >
          ₹ {props.price}
        </div>
      </Link>

      <div className="d-flex justify-content-center mt-1">
        <Reviews rating={props.reviews} />
      </div>

      <div
        className="d-flex justify-content-center gap-2 mt-2"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AddToCart
          product={props}
          classSup="small-cart-btn" // Apply CSS class to handle mobile styling
        />

        <AddToWishlist
          product={props}
          classSup="small-wishlist-btn rounded-3" // Smaller Wishlist button
          supStyle={{
            padding: "4px 10px",
            fontSize: "12px",
          }}
        />
        <Link
          to={`/product/${props.id}`}
          className="fd-btn rounded-3"
          style={{
            padding: "4px 10px", // Smaller padding for view button
            fontSize: "12px",
          }}
        >
          <i className="bi bi-eye"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
