import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_color">
      <footer className="container">
        <div className="row py-4">
          <div className="col-md-4">
            <div className="footer-col">
              <div className="heading">
                <h2>About Us</h2>
              </div>
              <div className="content">
                <p>
                  Our dedicated home interior designers work with you tirelessly
                  to tie your style with their design expertise, creating the
                  perfect interior design concept.
                </p>
              </div>
              <div
                className="link-call"
                onClick={() =>
                  window.open("mailto:support@Homekins.com", "_self")
                }
              >
                support@interior-decorating.com
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-col">
              <h2 className="heading">Usefull link</h2>
              <div className="content">
                <div className="link">Frequently Asked</div>
                <div className="link">Terms & Conditions</div>
                <div className="link">Help Center</div>
                <div className="link">Contact Us</div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-col">
              <h2 className="heading">Features</h2>
              <div className="content">
                <div className="link">Career</div>
                <div className="link">Brand Identity</div>
                <div className="link">Investment</div>
                <div className="link">Agency Patner</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col">
              <h2 className="heading">Follow Us</h2>
              <div className="content">
                <p>
                  Explore thousands of inspiring interior designs, from our best
                  team here.
                </p>
                <div className="pt-1">
                  <span className="">
                    <Link to="#" title="">
                      <i className="fab fa-facebook-f ficon"></i>
                    </Link>
                  </span>
                  <span className="">
                    <Link to="#" title="">
                      <i className="fab fa-twitter ficon"></i>
                    </Link>
                  </span>
                  <span className="">
                    <Link to="#" title="">
                      <i className="fab fa-instagram ficon"></i>
                    </Link>
                  </span>
                  <span className="">
                    <Link to="#" title="">
                      <i className="fab fa-linkedin-in ficon"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="subfooter py-4">
          <div className="row m-2">
            <div className="col-md-12">
              <div className="content">
                <p className="text-center">
                  © Copyrights 2022 Interior Decorating All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
