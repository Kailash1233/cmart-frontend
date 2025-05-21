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
  data?: any;
};

const ProductCart = (props: ProductType) => {
  return (
    <div
      className="position-relative bg-white mt-4 border fd-hover-border-primary product-cart shadow-sm"
      style={{
        padding: "12px",
        borderRadius: "8px",
        maxWidth: "100%",
        height: "auto",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Link
        to={`/product/${props.id}`}
        className="product-link d-flex flex-column align-items-center text-decoration-none"
        style={{ color: "inherit", flexGrow: 1 }}
      >
        <div
          className="position-relative product-img mb-3"
          style={{
            width: "100%",
            maxHeight: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={link(props.img)}
            alt={props.name}
            className="img-fluid"
            style={{
              maxHeight: "160px",
              width: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        {!props.reduction ? (
          <span
            className="position-absolute top-0 start-0 fd-btn"
            style={{
              padding: "4px 18px",
              fontSize: "16px",
              borderRadius: "0 0 8px 0",
              zIndex: 10,
            }}
          >
            SALE
          </span>
        ) : (
          <span
            className="position-absolute top-0 start-0 fd-btn-red"
            style={{
              padding: "4px 12px",
              fontSize: "12px",
              borderRadius: "0 0 8px 0",
              zIndex: 10,
            }}
          >
            {props.reduction}
          </span>
        )}
        <div
          className="text-center mt-1"
          style={{ flexGrow: 1, width: "100%" }}
        >
          <h6
            className="product-name fw-bold text-dark"
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.3",
              maxHeight: "2.6rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textAlign: "center",
              padding: "0 4px",
            }}
            title={props.name}
          >
            {props.name}
          </h6>
        </div>

        <div
          className="d-flex justify-content-center text-black fw-semibold"
          style={{
            fontSize: "1.1rem",
            marginTop: "4px",
            letterSpacing: "0.02em",
          }}
        >
          ₹ {props.price.toLocaleString()}
        </div>
      </Link>

      <div className="d-flex justify-content-center mt-2">
        <Reviews rating={props.reviews} />
      </div>

      <div
        className="d-flex justify-content-center gap-2 mt-3 flex-wrap"
        style={{
          alignItems: "center",
        }}
      >
        <AddToCart
          product={props}
          classSup="small-cart-btn"
          // style={{ flex: "1 1 auto", minWidth: "90px" }}
        />

        <AddToWishlist
          product={props}
          classSup="small-wishlist-btn rounded-3"
          supStyle={{
            padding: "6px 14px",
            fontSize: "13px",
          }}
          // style={{ flex: "1 1 auto", minWidth: "90px" }}
        />
        {/* <Link
          to={`/product/${props.id}`}
          className="fd-btn rounded-3 text-center"
          style={{
            padding: "6px 14px",
            fontSize: "13px",
            flex: "1 1 auto",
            minWidth: "90px",
          }}
          aria-label={`View details of ${props.name}`}
        >
          <i className="bi bi-eye" style={{ fontSize: "1.1rem" }}></i>
        </Link> */}
      </div>
    </div>
  );
};

export default ProductCart;
