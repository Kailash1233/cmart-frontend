import React, { FC, useEffect, useState } from "react";
import SlideShow from "../../components/SlideShow";
import axios from "axios";
import ProductCart from "../../components/ProductCart";
import ProductSort from "../../components/ProductSort";
import ProductOfDay from "../../components/ProductOfDay";
import Blog from "../../components/Blog";
import { CategoryType, blogInfo } from "../VirtualData";
import { Link } from "react-router-dom";

import Spinner from "../../components/Spinner";
import RoutePaths from "../../config";
import { PROD_URL } from "../../Utils/Generals";

const BASE_URL = PROD_URL;

const Category = ({
  category,
  arrow = "left",
}: {
  category: CategoryType;
  arrow?: string;
}) => {
  return (
    <div key={category.id} className="category text-dark">
      {/* {arrow === "left" ? (
        <i className="bi bi-chevron-double-right me-2"></i>
      ) : null}
      <Link to={"/"} className="text-dark">
        {category.name}
      </Link>
      {arrow === "right" ? (
        <i className="bi bi-chevron-right float-end opacity-75 me-2"></i>
      ) : null} */}
    </div>
  );
};

const About: FC = () => {
  return (
    <div
      className="section-info p-2 py-4 rounded-3 my-5 border-2 border-color-light shadow text-black"
      style={{ minHeight: "100px" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-3 py-3 py-lg-0 d-flex gap-2">
            <div className="w-25 text-center align-self-center">
              <i className="bi bi-clock fa-2x"></i>
            </div>
            <div>
              <h6 className="fw-bold">24 Hrs Delivery</h6>
              <span className="font-light opacity-75">
                Get your materials delivered within 24 hours.
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 py-3 py-lg-0 d-flex gap-2">
            <div className="w-25 text-center align-self-center">
              <i className="bi bi-award fa-2x"></i>
            </div>
            <div>
              <h6 className="fw-bold">Best Quality</h6>
              <span className="font-light opacity-75">
                We provide only the best quality construction materials.
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 py-3 py-lg-0 d-flex gap-2">
            <div className="w-25 text-center align-self-center">
              <i className="bi bi-shield-lock fa-2x"></i>
            </div>
            <div>
              <h6 className="fw-bold">COD Available</h6>
              <span className="font-light opacity-75">
                We use secure payment methods for the payments.
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 py-3 py-lg-0 d-flex gap-2">
            <div className="w-25 text-center align-self-center">
              <i className="bi bi-box-seam fa-2x"></i>
            </div>
            <div>
              <h6 className="fw-bold">All types of Supply</h6>
              <span className="font-light opacity-75">
                You can also order in bulk and save more on your purchases.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Promotion: FC = () => {
  return (
    <div
      className="section-promotion d-grid grid-0 grid-lg-2 gap-2"
      style={{ minHeight: "170px" }}
    >
      <div className="p-0 shadow">
        <img className="w-100 h-100" src="/img/1.jpg" alt="promotion 1" />
      </div>
      <div className="p-0 mt-3 mt-lg-0 shadow">
        <img
          className="w-100 h-100"
          src="/img/raw_materials.jpg"
          alt="promotion 1"
        />
      </div>
    </div>
  );
};

const Promotion2 = () => {
  return (
    <div
      className="promotion-2 position-relative d-none d-lg-block my-5"
      style={{ height: "450px" }}
    >
      <div className="position-relative promotion-2-image h-100">
        <span
          className="position-absolute top-0 end-0 start-0 bottom-0 rounded-4"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        ></span>
        <img
          src="/img/constr.jpg"
          alt="banner promo"
          className="w-100 h-100 rounded-4"
        />
      </div>
      <div
        className="promotion-text position-absolute col-5"
        style={{ top: "25%", left: "2%" }}
      >
        <h2>BUILDING SEASON OFFER</h2>
        <h1 className="fw-bold">
          <span className="fd-color-primary">Up to 25%</span> OFF
        </h1>
        <p>
          Get top-quality construction materials at unbeatable prices. Stock up
          on Steel, Cement, Bricks, and more!
        </p>
        <Link
          to={RoutePaths.shop}
          className="fd-btn w-50 rounded-5 text-center"
        >
          Order Now <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

// const Promotion3 = () => {
//   return (
//     <div className="promotion-3 position-relative shadow">
//       <div className="position-relative promotion-2-image h-100">
//         <span
//           className="position-absolute top-0 end-0 start-0 bottom-0"
//           style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
//         ></span>
//         <img src="/img/cons.jpg" alt="banner promo" className="w-100 h-100" />
//       </div>
//       <div
//         className="promotion-text position-absolute w-100 p-2"
//         style={{ top: "5%" }}
//       >
//         <h4>20% Off on All Construction Materials</h4>
//         <h3>Premium Quality Supplies</h3>
//         <h4 className="fw-bold my-3">
//           Starting at <span className="fd-color-primary">₹499.99</span>
//         </h4>
//         <Link
//           to={RoutePaths.shop}
//           className="fd-btn w-75 rounded-5 text-center"
//         >
//           Shop now <i className="bi bi-arrow-right"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const PopularProducts = ({
//   grid = 3,
//   type = "grid",
// }: {
//   grid?: number | boolean;
//   type?: string;
// }) => {
//   const {
//     isLoading,
//     data: productsList,
//     isSuccess,
//     isError,
//   } = uy("seGetAllProductsQuerapi/products");

//   // const productsList : ProductType[] = useAppSelector((state) => state.products);

//   let content: React.ReactNode;

//   content =
//     isLoading || isError ? (
//       <Spinner />
//     ) : isSuccess ? (
//       productsList["data"].map((product: ProductType) => (
//         <ProductCart {...product} type={type} key={product.id} />
//       ))
//     ) : null;

//   return (
//     <div
//       className={
//         type === "list" ? "test" : "d-grid gap-3 grid-0 grid-lg-" + grid
//       }
//     >
//       {content}
//     </div>
//   );
// };

// const PopularProducts = ({
//   grid = 3,
//   type = "grid",
// }: {
//   grid?: number | boolean;
//   type?: string;
// }) => {
//   // Use hardcoded data instead of fetching from an API
//   const productsList = hardcodedProducts;

//   let content: React.ReactNode;

//   content =
//     productsList.length === 0 ? (
//       <Spinner />
//     ) : (
//       productsList.map((product: ProductType) => (
//         <ProductCart {...product} type={type} key={product.id} />
//       ))
//     );

//   return (
//     <div
//       className={
//         type === "list" ? "test" : "d-grid gap-3 grid-0 grid-lg-" + grid
//       }
//     >
//       {content}
//     </div>
//   );
// };

// const SortProducts = () => {
//   const { data: products, isLoading, isError } = useGetBestProductsQuery("");

//   return (
//     <>
//       {!isLoading && !isError ? (
//         <div>
//           {products.data.map((product: { products: ProductType }) => (
//             <ProductSort {...product.products} key={product.products.id} />
//           ))}
//         </div>
//       ) : (
//         <Spinner />
//       )}
//     </>
//   );
// };
interface ProductType {
  id: number;
  img: string;
  reviews: number;
  name: string;
  price: number;
  reduction?: string;
  type: string;
  desc: string;
  quantity: number;
  total_quantity: number;
  categorie_id: number;
}

const PopularProducts = ({
  grid = 4,
  type = "grid",
}: {
  grid?: number | boolean;
  type?: string;
}) => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    console.log("fetched");
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      const res = response.data.data;

      const products: ProductType[] = res.data.map((item: any) => ({
        id: item.id,
        img: item.attributes.img.data.attributes.url,
        reviews: 4.5, 
        name: item.attributes.Name,
        price: item.attributes.Price,
        reduction: null,
        type: "list", 
        desc: item.attributes.Desc,
        quantity: 1,
        total_quantity: 1, 
        categorie_id: 1, 
      }));

      setProductsList(products);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let content: React.ReactNode;

  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (productsList.length === 0) {
    content = <div>No products available</div>;
  } else {
    content = productsList.map((product: ProductType) => (
      <div className="col-6 col-lg-3" key={product.id}>
        <ProductCart {...product} type={type} />
      </div>
    ));
  }

  return (
    <>
      {/* <button onClick={() => fet && fet()}>Fetch Products</button> */}
      <div className="row gx-3 gy-4">{content}</div>
    </>
  );
};

export default PopularProducts;

// const SortProducts = () => {
//   // Use hardcoded data instead of fetching from an API
//   const products = { data: hardcodedProducts };

//   return (
//     <>
//       <div>
//         {products.data.map((product: ProductType) => (
//           <ProductSort {...product} key={product.id} />
//         ))}
//       </div>
//     </>
//   );
// };

const SortProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BASE_URL);
        // console.log(response.data);
        const fetchedProducts = response.data.data.map(
          (product: { attributes: ProductType }) => ({
            ...product.attributes,
            id: product.attributes.id,
          })
        );
        setProducts(fetchedProducts);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      {products.map((product: ProductType) => (
        <ProductSort {...product} key={product.id} />
      ))}
    </div>
  );
};

const BlogAndNews = ({ grid = 3 }: { grid?: number }) => {
  return (
    <div
      className={
        "d-grid gap-3 grid-0 grid-lg-" +
        grid +
        " mb-0 mb-lg-2 justify-content-space-between gap-3"
      }
    >
      {blogInfo.map((blog) => (
        <Blog {...blog} key={blog.blog_id} />
      ))}
    </div>
  );
};

const Section = () => (
  <section>
    <div className="container-fluid">
      {/* Dark blue delivery information section */}
      {/* <div
        className="d-flex justify-content-center align-items-center fd-bg-secondary"
        style={{
          color: "white",
          padding: "5px 0",
          fontSize: "16px",
        }}
      >
        <i className="bi bi-truck"></i>&nbsp; Deliverable only to Chennai and
        Chengalpet
      </div> */}
      <div className="row justify-content-between" style={{ height: "400px" }}>
        <div className="fd-slideshow col-xl-8 col-sm-12 col-md-12 p-0 h-100 w-auto">
          <SlideShow />
        </div>
      </div>
      <div className="px-3 px-lg-5">
        <About />
        {/* <Promotion /> */}
        <div className="popular-products text-black my-5">
          <div className="d-flex flex-wrap justify-content-between mb-2">
            <h4>Popular Products</h4>
            <div>
              <Link to={RoutePaths.shop} className="fd-btn fw-bold">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <PopularProducts />
        </div>
        {/* <div
          className="day-deals-rated row justify-content-between text-black"
          style={{ minHeight: "400px" }}
        >
          <div className="day-deals col-12 col-lg-8 bg-white p-3 mb-2 mb-lg-0 border-1 border w-auto">
            <div className="d-flex justify-content-between border-bottom-2">
              <h5>Deals Hot Of The Day</h5>
               <div className="deals-direction d-flex gap-2">
                <a href="#" className="text-dark">
                  <i className="bi bi-arrow-left"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <hr />
            <div>
              <ProductOfDay />
            </div>
          </div>
        </div> */}
        <Promotion2 />
        {/* <div
          className="product-types d-grid grid-lg-4 grid-0 gap-3 my-5"
          style={{ minHeight: "300px" }}
        >
          <div className="top-rated text-black bg-white border-1 border fd-hover-border-primary p-3">
            <h5>Hot Deals</h5>
            <hr />
            <SortProducts />
          </div>
          <div className="top-rated text-black bg-white border-1 border fd-hover-border-primary p-3">
            <h5>Top Rated Products</h5>
            <hr />
            <SortProducts />
          </div>
          <div className="top-rated text-black bg-white border-1 border fd-hover-border-primary p-3">
            <h5>Best Seller</h5>
            <hr />
            <SortProducts />
          </div>
          <Promotion3 />
        </div> */}
        {/* <div className="featured-products text-black my-5">
          <div className="d-flex justify-content-between mb-5">
            <h4>Featured Products</h4>
            <div>
              <a href="#" className="fd-btn fw-bold">
                View All <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <PopularProducts grid={4} />
        </div> */}
      </div>
      {/* <MakeCall /> */}
      {/* <div className="blog-news text-black px-3 px-lg-5 my-5">
        <div className="d-flex flex-wrap justify-content-between mb-5">
          <h4>Latest Blog & News</h4>
          <div>
            <a href="/blog" className="fd-btn fw-bold">
              View All <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <BlogAndNews />
      </div> */}
    </div>
  </section>
);

export { Section, BlogAndNews, PopularProducts, SortProducts, Category };
