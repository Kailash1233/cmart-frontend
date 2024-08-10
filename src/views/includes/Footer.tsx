import React from "react";
import NewsLetter from "../../components/NewsLetter";
import { SocialsNetworks } from "../../components/SocialsNetworks";
import { Link } from "react-router-dom";
import RoutePaths from "../../config";

const Footer = () => {
  return (
    <footer className="mt-5">
      <NewsLetter />
      <div className="footer-content bg-black gap-3 px-3 px-lg-5 py-5">
        <div className="f-content d-flex flex-wrap justify-content-space-between">
          <div className="contacts w-20">
            <h5 className="my-5">Our Address</h5>
            <div className="opacity-75">
              <div>
                <i className="bi bi-geo-alt fd-color-primary me-2"></i>Chennai,
                TamilNadu
              </div>
              <div>
                <i className="bi bi-phone fd-color-primary me-2"></i>+91 91507
                51905
              </div>
              <div>
                <i className="bi bi-envelope fd-color-primary me-2"></i>
                kvmcmart@gmail.com
              </div>
            </div>
            <SocialsNetworks />
          </div>
          <div className="informations">
            <h5 className="my-5">Information</h5>
            <div className="opacity-75">
              <div>
                <a href="#">About Us</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Frequently Asked Questions</a>
              </div>
              <div>
                <a href="#">Customer Service</a>
              </div>
            </div>
          </div>
          <div className="account">
            <h5 className="my-5">My Account</h5>
            <div className="opacity-75">
              <div>
                <Link to={RoutePaths.userAccount}>My Account</Link>
              </div>
              <div>
                <a href="#">Login Page</a>
              </div>
              <div>
                <a href="#">Order History</a>
              </div>
              <div>
                <a href="#">Register Account</a>
              </div>
              <div>
                <a href="#">Logout</a>
              </div>
            </div>
          </div>
          <div className="help">
            <h5 className="my-5">Need Help?</h5>
            <div className="opacity-75">
              <div>
                <a href="#">Help Center</a>
              </div>
              <div>
                <a href="#">Terms & Conditions</a>
              </div>
              <div>
                <a href="#">Shipping Policy</a>
              </div>
              <div>
                <a href="#">Returns & Refunds</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="categories">
            <h5 className="my-5">Categories</h5>
            <div className="opacity-75">
              <div>
                <a href="#">Steel</a>
              </div>
              <div>
                <a href="#">Cement</a>
              </div>
              <div>
                <a href="#">ACC Blocks</a>
              </div>
              <div>
                <a href="#">Bricks</a>
              </div>
              <div>
                <a href="#">Sand</a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="d-flex flex-wrap gap-3">
            <h6 className="fw-bold">Construction Materials: </h6>
            <p className="opacity-50">
              <span>Steel | </span>
              <span>Cement | </span>
              <span>ACC Blocks | </span>
              <span>Bricks | </span>
              <span>Sand | </span>
              <span>Steel | </span>
              <span>Cement | </span>
              <span>ACC Blocks | </span>
              <span>Bricks | </span>
              <span>Sand | </span>
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <p>
            <img src="/img/payment.png" alt="" className="w-100" />
          </p>
          <p className="opacity-75">
            Copyright &copy; 2024 By <span className="fw-bold">Adszoo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
