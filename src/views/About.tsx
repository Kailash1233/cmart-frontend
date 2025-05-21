import React from "react";
import { Link } from "react-router-dom";
import RoutePaths from "../config";
import Header from "./includes/Header";
import Footer from "./includes/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-us text-black">
        {/* Hero Section */}
        <div
          className="about-hero position-relative text-white d-flex align-items-center"
          style={{
            backgroundImage: `url('/About.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          ></div>
          <div className="container position-relative z-1">
            <h1 className="fw-bold display-5">About KVM Cmart</h1>
            <p className="lead">
              Your trusted partner for quality construction materials
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container py-5">
          {/* Who We Are */}
          <div className="bg-white border border-1 fd-hover-border-primary p-4 p-md-5 rounded-4 mb-5 shadow-sm">
            <div className="row row-cols-1 row-cols-md-2 align-items-center g-4">
              <div className="col">
                <img
                  src="/KVM1.jpeg"
                  alt="Our Team"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
              <div className="col">
                <h2 className="fw-bold mb-3 fd-color-primary">Who We Are</h2>
                <p className="mb-3">
                  KVM Cmart is your one-stop destination for all construction
                  and building material needs. From cement and steel to
                  finishing items, we offer reliable products from top brands.
                </p>
                <p>
                  Headquartered in Chengalpet, we’re committed to timely
                  delivery, affordable pricing, and transparent service — making
                  construction efficient and hassle-free.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
            <div className="col">
              <div className="bg-white border border-1 p-4 rounded-4 shadow-sm h-100">
                <h3 className="fw-bold mb-3 fd-color-primary">Our Mission</h3>
                <p>
                  To simplify construction procurement by offering fast delivery
                  of trusted materials at the best prices — combining
                  convenience, quality, and trust.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="bg-white border border-1 p-4 rounded-4 shadow-sm h-100">
                <h3 className="fw-bold mb-3 fd-color-primary">Our Vision</h3>
                <p>
                  To become South India’s most preferred digital construction
                  marketplace, trusted by individuals and companies alike for
                  reliability and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-5">
            <h3 className="fw-bold mb-4 fd-color-primary">Our Core Values</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="p-4 bg-white border border-1 rounded-4 shadow-sm h-100">
                  <i className="bi bi-award fa-2x mb-2 fd-color-primary"></i>
                  <h5 className="fw-bold">Quality</h5>
                  <p className="mb-0">
                    Only top-grade materials from trusted suppliers.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white border border-1 rounded-4 shadow-sm h-100">
                  <i className="bi bi-lightning-charge fa-2x mb-2 fd-color-primary"></i>
                  <h5 className="fw-bold">Speed</h5>
                  <p className="mb-0">
                    Fast logistics, real-time tracking, and prompt service.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white border border-1 rounded-4 shadow-sm h-100">
                  <i className="bi bi-person-check fa-2x mb-2 fd-color-primary"></i>
                  <h5 className="fw-bold">Trust</h5>
                  <p className="mb-0">
                    Transparent processes with secure payments and verified
                    vendors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5">
            <h4 className="fw-bold mb-2">Ready to build with confidence?</h4>
            <p className="mb-3">
              Explore our store and order everything you need — quick and
              reliable.
            </p>
            <Link
              to={RoutePaths.shop}
              className="fd-btn fw-bold rounded-5 px-4 py-2"
            >
              Shop Now <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
