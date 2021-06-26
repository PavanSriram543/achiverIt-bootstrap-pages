import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer pb-30">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <div className="log-img">
                <img
                  src="https://www.achieversit.com/assets/images/AIT-white.jpg"
                  alt="AcheiversIT"
                />
                <p className="logo-data text-gray">
                  AchieversIT - provides a wide group of opportunities for
                  freshers and Experienced candidate who can develop their
                  skills and build their career opportunities across multiple
                  Companies.
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row pb-30">
                <div className="col-md-4 list-1">
                  <h5 className="text-gray">COMPANY</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Placements</Link>
                    </li>
                    <li>
                      <Link to="/">Corporate Training</Link>
                    </li>
                    <li className="contact">
                      <Link to="/">CONTACT US</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 list-2">
                  <h5 className="text-gray">TRENDING COURSES</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">UI Development Course</Link>
                    </li>
                    <li>
                      <Link to="/">Angular JS Course</Link>
                    </li>
                    <li>
                      <Link to="/">React JS Course</Link>
                    </li>
                    <li>
                      <Link to="/">Digital Marketing Course </Link>
                    </li>
                    <li>
                      <Link to="/">Python Course </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                  <h5 className="text-gray">CONTACT INFO</h5>
                  <ul className="list-unstyled text-white">
                    <li>
                      <span className="pad-5 font-12">
                        #272, 6th Main, Next to Preksha Montessori , 1st Floor,
                        BTM 2nd Stage, Bangalore, India - 560076
                      </span>
                    </li>
                    <li>
                      <span className="pb-10 font-12">
                        India : +91 8431-040-457
                      </span>
                    </li>
                    <li>
                      <span className="pb-10 font-12">
                        {" "}
                        info@achieversit.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 social-icons">
            <ul className="list-unstyled text-white d-flex justify-content-center">
              <li className="p-2">facebook</li>
              <li className="p-2">LinkedIn</li>
              <li className="p-2">twitter</li>
              <li className="p-2">point</li>
              <li className="p-2">youtube</li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 footer-copyright pt p-4">
          <ul className="row list-unstyled">
            <li className="col-sm-12 col-md-3 pb-10 text-gray copy-rights">
              Copyright © 2020 AchieversIT. All Rights Reserved
            </li>
            <li className="col-sm-12 col-md-3 pb-10">
              <Link to="/" className="p-4 ">
                Privacy Policy
              </Link>
            </li>
            <li className="col-sm-12 col-md-3 pb-10">
              <Link to="/" className="p-4 ">
                Terms of use
              </Link>
            </li>
            <li className="col-sm-12 col-md-3 pb-10">
              <Link to="/" className="p-4 ">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-12 col-sm-12 fixed-footer">
        <ul className="row list-unstyled m-0 d-flex justify-content-center ">
          <li className="col-md-3 col-4 p-3">
            <Link to="/">
              <i className="fab fa-whatsapp text-success fa-3x" />
            </Link>
          </li>
          <li className="col-md-3 col-4 p-3">
            <Link to="/">
              <i className="fas fa-phone-volume fa-3x text-primary" />
              <span className="span-text"> Call us on : +91 8431-040-457</span>
            </Link>
          </li>
          <li className="col-md-3 col-4 p-3">
            <Link to="/">
              <i className="far fa-envelope text-orange fa-3x" />
              <span className="span-text"> Request A Call Back</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
