import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import { ProductType } from "./ProductCart";
import { link } from "../Utils/Generals";

const ProductSort = (props: ProductType) => {
  return (
    <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
      <div className="w-25 border-1 border fd-hover-border-primary">
        <Link to={"/product/" + props.id}>
          <img src={link(props.img)} alt={props.name} className="w-100 h-100" />
        </Link>
      </div>
      <div className="w-75">
        <Link
          to={"/product/" + props.id}
          className="product-name my-2 fw-bold text-dark"
        >
          {props.name}
        </Link>
        <Reviews rating={props.reviews} />
        <div className="d-flex">
          <span className="fd-color-primary fw-bold me-1">₹{props.price}</span>
          <span
            className="align-self-end"
            style={{ textDecoration: "line-through" }}
          >
            ₹{props.old_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;

// import Reviews from "./Reviews";
// import { Link } from "react-router-dom";
// import { ProductType } from "./ProductCart";
// import { link } from "../Utils/Generals";

// const sampleimg1 = "/img/product/1.jpg";

// const ProductSort = (props: ProductType) => {
//   return (
//     <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
//       <div className="w-25 border-1 border fd-hover-border-primary">
//         <Link to={"/product/" + props.id}>
//           <img
//             // src={
//             //   props.img
//             //     ? link(props.img)
//             //     : "https://via.placeholder.com/600x400"
//             // }
//             src={sampleimg1}
//             alt={props.name}
//             className="w-100 h-100"
//           />
//         </Link>
//       </div>
//       <div className="w-75">
//         <Link
//           to={"/product/" + props.id}
//           className="product-name my-2 fw-bold text-dark"
//         >
//           {props.name}
//         </Link>
//         <Reviews rating={props.reviews} />
//         <div className="d-flex">
//           <span className="fd-color-primary fw-bold me-1">₹{props.price}</span>
//           <span
//             className="align-self-end"
//             style={{ textDecoration: "line-through" }}
//           >
//             ₹{props.old_price}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSort;

// import Reviews from "./Reviews";
// import { Link } from "react-router-dom";
// import { ProductType } from "./ProductCart";

// const sampleimg1 = "/img/product/1.jpg";

// // Hardcoded product data for the frontend
// const hardcodedProduct: ProductType = {
//   id: 1,
//   img: sampleimg1,
//   reviews: 4.5,
//   name: "Premium Construction Material",
//   price: 1200,
//   old_price: 1500,
//   reduction: "20",
//   type: "sort", // Type can be 'sort' for sorting purposes
//   desc: "High-quality material for your building needs.",
//   quantity: 50,
//   total_quantity: 100,
//   categorie_id: 2,
// };

// const ProductSort = () => {
//   const product = hardcodedProduct;

//   return (
//     <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
//       <div className="w-25 border-1 border fd-hover-border-primary">
//         <Link to={"/product/" + product.id}>
//           <img
//             src={product.img}
//             alt={product.name}
//             className="w-100 h-100"
//           />
//         </Link>
//       </div>
//       <div className="w-75">
//         <Link
//           to={"/product/" + product.id}
//           className="product-name my-2 fw-bold text-dark"
//         >
//           {product.name}
//         </Link>
//         <Reviews rating={product.reviews} />
//         <div className="d-flex">
//           <span className="fd-color-primary fw-bold me-1">₹{product.price}</span>
//           <span
//             className="align-self-end"
//             style={{ textDecoration: "line-through" }}
//           >
//             ₹{product.old_price}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSort;
