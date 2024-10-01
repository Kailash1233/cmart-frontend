import React from "react";
import Reviews from "./Reviews";
import NumberCount from "./NumberCount";
import { PopularProducts } from "../views/includes/Section";
import { Carousel } from "react-responsive-carousel";
import AddToCart from "./AddToCart";
import { ProductType } from "./ProductCart";
import { link } from "../Utils/Generals";
import { Link } from "react-router-dom";
import RoutePaths from "../config";

// const ProductDetails = ({ product } : { product: ProductType }) => {
const ProductDetails = (tempProduct: any) => {
  const props: ProductType = tempProduct.product;
  // console.log(props.data.attributes.Desc, "datasss");
  var product: ProductType = {
    id: props.data.id,
    img: props.data.attributes.img.data.attributes.url,
    reviews: 1,
    name: props.data.attributes.Name,
    price: props.data.attributes.Price,
    reduction: "string",
    type: "string",
    desc: props.data.attributes.Desc,
    quantity: props.data.quantity,
    total_quantity: props.data.total_quantity,
    categorie_id: props.data.categorie_id,
    attributes: props.data.id,
  };
  // console.log('productDetails');
  // console.log(product);
  // console.log('productDetailsattributes');
  // console.log(product.attributes);
  // console.log('productDetailsattributesimg');
  // console.log(product.attributes.img);
  // const imageUrl = props.data.attributes.img.data.attributes.url;
  return (
    <div className="view-product px-3 px-lg-5">
      <div
        className="details-generals border border-1 fd-hover-border-primary bg-white row text-black justify-content-between p-5 gap-2 mt-5"
        style={{ minHeight: "400px" }}
      >
        <div className="p-img col-12 col-lg-6">
          <div className="product-img col-9 h-25">
            <Carousel
              showArrows={false}
              showIndicators={false}
              swipeable={true}
            >
              <div className="others-img">
                <img src={link(product.img)} alt="Alt" />
              </div>
              <div className="others-img">
                <img src={link(product.img)} alt="Alt" />
              </div>
              {/* <div className="others-img">
                <img src={link(imageUrl)} alt="Alt" />
              </div>
              <div className="others-img">
                <img src={link(imageUrl)} alt="Alt" />
              </div> */}
            </Carousel>
          </div>
        </div>
        <div className="p-details col-12 col-lg-5">
          <div className="d-flex flex-wrap gap-2">
            <Reviews rating={5} />
            <span className="fd-color-primary">(25 Reviews)</span>
          </div>
          <h3 className="fw-bold my-4">{product.name}</h3>
          <p className="fw-bold opacity-75">{product.desc}</p>
          <div className="d-flex flex-wrap gap-2">
            <h1 className="fw-bold fd-color-primary">₹ {product.price}</h1>
            {/* <h2
              className="fw-bold align-self-end"
              style={{ textDecoration: "line-through" }}
            >
              ₹{product.old_price}
            </h2> */}
          </div>
          <hr />
          <div className="categories-list d-flex flex-wrap gap-2">
            <h5 className="fw-bold">Categories : </h5>
            <div>
              <span> Cement,</span>
              <span> Steel,</span>
              <span> Paint,</span>
              <span> Bricks</span>
            </div>
          </div>
          <hr />
          <h5 className="fw-bold d-flex flex-wrap gap-2 mb-2">
            About this Item:
          </h5>
          <div className="">{product.attributes.Desc}</div>
          <div className="d-flex flex-wrap gap-2 my-4">
            <NumberCount product={product} min={1} />
            <AddToCart product={product} divClass="align-self-center" />
          </div>
          <div className="p-share d-flex flex-wrap gap-2 align-items-center">
            <h5 className="fw-bold d-flex flex-wrap gap-2 mb-0">Share : </h5>
            <div className="d-flex flex-wrap gap-2">
              <div>
                <a href="#" className="text-black">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div>
                <a href="#" className="text-black">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-desc p-5 my-5 bg-white border border-1 text-black"
        style={{ minHeight: "400px" }}
      >
        <div className="tab-title fw-bold d-flex flex-wrap gap-2">
          <div className="t-t">
            <a href="#" className="fd-color-primary">
              Description
            </a>
          </div>
          {/* <div className="t-t">
            <a href="#" className="text-black">
              Additional Informations
            </a>
          </div> */}
          {/* <div className="t-t">
            <a href="#" className="text-black">
              Reviews
            </a>
          </div> */}
        </div>
        <hr />
        <div className="opacity-50 fw-bold mt-2">
          <div className="tab-content">
            <p>
              Discover our premium range of construction materials, designed to
              meet the highest standards of quality and durability. From steel
              and cement to AAC blocks and bricks, we provide the essential
              building components for your projects. Our construction mart
              offers:
            </p>
            <p>
              Steel: High-strength steel for robust structures, ensuring
              reliability and safety. Cement: Superior-grade cement for strong,
              lasting foundations and concrete work. AAC Blocks: Lightweight and
              energy-efficient blocks ideal for modern construction needs.
              Bricks: Classic and durable bricks for a variety of construction
              and design requirements. Sand: High-quality sand for concrete
              mixing and masonry. Paint: A range of paints for finishing touches
              that provide both protection and aesthetic appeal. Our commitment
              to quality means you get products that are rigorously tested and
              compliant with industry standards. Whether you are working on
              residential, commercial, or industrial projects, our construction
              mart has the materials you need to build with confidence. Explore
              our offerings and experience the difference of top-tier
              construction materials. Contact us today to learn more about our
              products and how we can support your construction needs.
            </p>
          </div>
        </div>
      </div>
      <div className="related-products text-black my-5">
        <div className="d-flex flex-wrap justify-content-between mb-5">
          <h4>Related Products</h4>
          <div>
            <Link to={RoutePaths.shop} className="fd-btn fw-bold">
              View All <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
        <PopularProducts grid={4} />
      </div>
    </div>
  );
};

export default ProductDetails;
