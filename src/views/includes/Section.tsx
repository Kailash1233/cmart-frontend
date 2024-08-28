import React, { FC, useEffect, useState } from "react";
import SlideShow from "../../components/SlideShow";
import axios from "axios";
import ProductCart, { ProductType } from "../../components/ProductCart";
import ProductSort from "../../components/ProductSort";
import ProductOfDay from "../../components/ProductOfDay";
import Blog from "../../components/Blog";
import Testimonial from "../../components/Testimonial";
import { CategoryType, blogInfo, testimonialInfo } from "../VirtualData";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import {
  useGetAllProductsQuery,
  useGetBestProductsQuery,
} from "../../store/apiquery/productApiSlice";
import Spinner from "../../components/Spinner";
import { useGetAllCategoriesQuery } from "../../store/apiquery/categoryApiSlice";
import RoutePaths from "../../config";
import { PROD_URL } from "../../Utils/Generals";

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

const AllCategory = () => {
  const {
    isLoading,
    data: categoryList,
    isError,
  } = useGetAllCategoriesQuery("api/categories");

  return (
    <div className="all-category col-3 d-none d-xl-block shadow border-1 border-light p-0">
      <h6 className="fd-bg-primary p-3 fw-bold rounded-top-3">
        ALL CATEGORIES
      </h6>
      {/* {!isLoading && !isError ? (
        <div className="category-list d-flex flex-column gap-4 py-2 px-3">
          {categoryList?.data?.map((category: CategoryType) => (
            <Category category={category} arrow="right" key={category.id} />
          ))}
        </div>
      ) : (
        <Spinner />
      )} */}
    </div>
  );
};

export default AllCategory;

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

const Promotion3 = () => {
  return (
    <div className="promotion-3 position-relative shadow">
      <div className="position-relative promotion-2-image h-100">
        <span
          className="position-absolute top-0 end-0 start-0 bottom-0"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        ></span>
        <img src="/img/cons.jpg" alt="banner promo" className="w-100 h-100" />
      </div>
      <div
        className="promotion-text position-absolute w-100 p-2"
        style={{ top: "5%" }}
      >
        <h4>20% Off on All Construction Materials</h4>
        <h3>Premium Quality Supplies</h3>
        <h4 className="fw-bold my-3">
          Starting at <span className="fd-color-primary">₹499.99</span>
        </h4>
        <Link
          to={RoutePaths.shop}
          className="fd-btn w-75 rounded-5 text-center"
        >
          Shop now <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

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

// const hardcodedProducts: ProductType[] = [
//   // AAC Blocks
//   {
//     id: 1,
//     img: "/img/aac-4inch.jpg",
//     reviews: 4.5,
//     name: "4inch AAC Block",
//     price: 50,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "High-quality 4inch AAC Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 1,
//   },
//   {
//     id: 2,
//     img: "/img/aac-6inch.jpg",
//     reviews: 4.5,
//     name: "6inch AAC Block",
//     price: 73,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Durable 6inch AAC Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 1,
//   },
//   {
//     id: 3,
//     img: "/img/aac-8inch.jpg",
//     reviews: 4.5,
//     name: "8inch AAC Block",
//     price: 95,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Strong 8inch AAC Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 1,
//   },
//   {
//     id: 4,
//     img: "/img/aac-9inch.jpg",
//     reviews: 4.5,
//     name: "9inch AAC Block",
//     price: 106,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Robust 9inch AAC Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 1,
//   },
//   // Hollow Blocks
//   {
//     id: 5,
//     img: "/img/hollow-4inch.jpg",
//     reviews: 4.5,
//     name: "4inch Hollow Block",
//     price: 40,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Affordable 4inch Hollow Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 2,
//   },
//   {
//     id: 6,
//     img: "/img/hollow-6inch.jpg",
//     reviews: 4.5,
//     name: "6inch Hollow Block",
//     price: 50,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "High-quality 6inch Hollow Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 2,
//   },
//   {
//     id: 7,
//     img: "/img/hollow-8inch.jpg",
//     reviews: 4.5,
//     name: "8inch Hollow Block",
//     price: 60,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Sturdy 8inch Hollow Block for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 2,
//   },
//   // Bricks
//   {
//     id: 8,
//     img: "/img/brick-machine.jpg",
//     reviews: 4.5,
//     name: "Machine Cut Brick",
//     price: 10,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Precise Machine Cut Brick for construction.",
//     quantity: 1000,
//     total_quantity: 1000,
//     categorie_id: 3,
//   },
//   {
//     id: 9,
//     img: "/img/brick-normal.jpg",
//     reviews: 4.5,
//     name: "Normal Brick",
//     price: 9,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Standard Normal Brick for construction.",
//     quantity: 1000,
//     total_quantity: 1000,
//     categorie_id: 3,
//   },
//   // Sand
//   {
//     id: 10,
//     img: "/img/sand-m.jpg",
//     reviews: 4.5,
//     name: "M Sand",
//     price: 70,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Quality M Sand for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 4,
//   },
//   {
//     id: 11,
//     img: "/img/sand-p.jpg",
//     reviews: 4.5,
//     name: "P Sand (Nice)",
//     price: 90,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Premium P Sand for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 4,
//   },
//   // Cement Sheets
//   {
//     id: 12,
//     img: "/img/cement-6ft.jpg",
//     reviews: 4.5,
//     name: "6ft Cement Sheet",
//     price: 400,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "6ft Cement Sheet for construction.",
//     quantity: 50,
//     total_quantity: 50,
//     categorie_id: 5,
//   },
//   {
//     id: 13,
//     img: "/img/cement-8ft.jpg",
//     reviews: 4.5,
//     name: "8ft Cement Sheet",
//     price: 500,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "8ft Cement Sheet for construction.",
//     quantity: 50,
//     total_quantity: 50,
//     categorie_id: 5,
//   },
//   {
//     id: 14,
//     img: "/img/cement-10ft.jpg",
//     reviews: 4.5,
//     name: "10ft Cement Sheet",
//     price: 600,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "10ft Cement Sheet for construction.",
//     quantity: 50,
//     total_quantity: 50,
//     categorie_id: 5,
//   },
//   {
//     id: 15,
//     img: "/img/cement-12ft.jpg",
//     reviews: 4.5,
//     name: "12ft Cement Sheet",
//     price: 950,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "12ft Cement Sheet for construction.",
//     quantity: 50,
//     total_quantity: 50,
//     categorie_id: 5,
//   },
//   // Wood
//   {
//     id: 16,
//     img: "/img/wood-savuku.jpg",
//     reviews: 4.5,
//     name: "Savuku Wood (per kg)",
//     price: 15,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Savuku Wood for construction, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 6,
//   },
//   {
//     id: 17,
//     img: "/img/wood-thailam.jpg",
//     reviews: 4.5,
//     name: "Thailam Wood (per kg)",
//     price: 10,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Thailam Wood for construction, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 6,
//   },
//   {
//     id: 18,
//     img: "/img/wood-playwood.jpg",
//     reviews: 4.5,
//     name: "Playwood",
//     price: 0, // Placeholder price
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Playwood for construction.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 6,
//   },
//   // Steel
//   {
//     id: 19,
//     img: "/img/steel-arun-8mm.jpg",
//     reviews: 4.5,
//     name: "8mm Arun Steel (per kg)",
//     price: 61.5,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "8mm Arun Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   {
//     id: 20,
//     img: "/img/steel-arun-10mm.jpg",
//     reviews: 4.5,
//     name: "10mm Arun Steel (per kg)",
//     price: 60.5,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "10mm Arun Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   {
//     id: 21,
//     img: "/img/steel-arun-12mm.jpg",
//     reviews: 4.5,
//     name: "12mm Arun Steel (per kg)",
//     price: 60,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "12mm Arun Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   {
//     id: 22,
//     img: "/img/steel-ars-8mm.jpg",
//     reviews: 4.5,
//     name: "8mm Ars Steel (per kg)",
//     price: 66.5,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "8mm Ars Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   {
//     id: 23,
//     img: "/img/steel-ars-10mm.jpg",
//     reviews: 4.5,
//     name: "10mm Ars Steel (per kg)",
//     price: 65.5,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "10mm Ars Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   {
//     id: 24,
//     img: "/img/steel-ars-12mm.jpg",
//     reviews: 4.5,
//     name: "12mm Ars Steel (per kg)",
//     price: 65,
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "12mm Ars Steel, priced per kg.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 7,
//   },
//   // Paint
//   {
//     id: 25,
//     img: "/img/paint.jpg",
//     reviews: 4.5,
//     name: "Asian Paint",
//     price: 0, // Placeholder price
//     old_price: null,
//     reduction: null,
//     type: "list",
//     desc: "Asian Paint for all your painting needs.",
//     quantity: 100,
//     total_quantity: 100,
//     categorie_id: 8,
//   },
// ];

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
  old_price?: number;
  reduction?: string;
  type: string;
  desc: string;
  quantity: number;
  total_quantity: number;
  categorie_id: number;
}

const BASE_URL = PROD_URL;

const PopularProducts = ({
  grid = 3,
  type = "grid",
}: {
  grid?: number | boolean;
  type?: string;
}) => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const products = response.data.data.map((item: any) => ({
          id: item.id,
          img: item.attributes.Assert.data.attributes.url,
          reviews: 4.5,
          name: item.attributes.ItemName,
          price: item.attributes.Price,
          old_price: null,
          reduction: null,
          type: "list",
          desc: item.attributes.ItemName,
          quantity: 100,
          total_quantity: 100,
          categorie_id: 1,
        }));
        setProductsList(products);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

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
      <ProductCart {...product} type={type} key={product.id} />
    ));
  }

  return (
    <div
      className={
        type === "list" ? "test" : "d-grid gap-3 grid-0 grid-lg-" + grid
      }
    >
      {content}
    </div>
  );
};

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
        const fetchedProducts = response.data.data.map((product: { attributes: ProductType }) => ({
          ...product.attributes,
          id: product.id,
        }));
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

// const Testimonials = () => {
//   return (
//     <div className="d-grid grid-lg-2 grid-0 gap-3 my-5">
//       {testimonialInfo.map((testimonial) => (
//         <Testimonial {...testimonial} key={testimonial.authorName} />
//       ))}
//     </div>
//   );
// };

const Testimonials = () => {
  // Hardcoded testimonial data
  const testimonialInfo = [
    {
      authorName: "Kailash",
      authorImg: "/img/1.png",
      rating: 5,
      text: "Naveen did a fantastic job in delivering my products on time. The entire process was smooth, and I couldn't be happier with the quality and service provided.",
    },
    {
      authorName: "Prem Kumar",
      authorImg: "/img/profile.webp",
      rating: 4,
      text: "The UI of the website was clean and intuitive. Everything was done smoothly, and the quality was excellent. I'm thoroughly impressed with the professionalism and efficiency.",
    },
  ];

  return (
    <div className="d-grid grid-lg-2 grid-0 gap-3 my-5">
      {testimonialInfo.map((testimonial) => (
        <Testimonial {...testimonial} key={testimonial.authorName} />
      ))}
    </div>
  );
};

// const MakeCall = () => {
//   return (
//     <div
//       className="make-call d-flex flex-wrap fw-bold justify-content-between fd-bg-primary w-100 py-4 px-2 px-lg-5 my-5"
//       style={{ minHeight: "60px" }}
//     >
//       <h3>Get A Free Service Or Make A Call</h3>
//       <div className="align-self-center mt-3 mt-lg-0">
//         <a href="#" className="bg-white fd-color-primary py-3 px-4">
//           <i className="bi bi-phone me-1"></i>MAKE A CALL
//         </a>
//       </div>
//     </div>
//   );
// };

const Section = () => {
  return (
    <section>
      <div className="container-fluid">
        <div
          className="row justify-content-between"
          style={{ height: "400px" }}
        >
          <div className="fd-slideshow col-xl-8 col-sm-12 col-md-12 p-0 h-100 w-auto">
            <SlideShow />
          </div>
        </div>
        <div className="px-3 px-lg-5">
          <About />
          <Promotion />
          <div className="popular-products text-black my-5">
            <div className="d-flex flex-wrap justify-content-between mb-2">
              <h4>Popular Products</h4>
              <div>
                <Link to={RoutePaths.shop} className="fd-btn fw-bold">
                  View All <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <PopularProducts grid={4} />
          </div>
          <div
            className="day-deals-rated row justify-content-between text-black"
            style={{ minHeight: "400px" }}
          >
            <div className="day-deals col-12 col-lg-8 bg-white p-3 mb-2 mb-lg-0 border-1 border w-auto">
              <div className="d-flex justify-content-between border-bottom-2">
                <h5>Deals Hot Of The Day</h5>
                {/* <div className="deals-direction d-flex gap-2">
                  <a href="#" className="text-dark">
                    <i className="bi bi-arrow-left"></i>
                  </a>
                  <a href="#" className="text-dark">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div> */}
              </div>
              <hr />
              <div>
                <ProductOfDay />
              </div>
            </div>
          </div>
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
        <div className="blog-news text-black px-3 px-lg-5 my-5">
          <div className="d-flex flex-wrap justify-content-between mb-5">
            <h4>Latest Blog & News</h4>
            <div>
              <a href="/blog" className="fd-btn fw-bold">
                View All <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <BlogAndNews />
        </div>
        <div className="testimonials text-black px-3 px-lg-5 my-5">
          <h4>What Our Clients Say?</h4>
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export {
  Section,
  BlogAndNews,
  PopularProducts,
  SortProducts,
  AllCategory,
  Category,
  Testimonials,
};
