import { Link } from "react-scroll";
import React from "react";

export default Footer;

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div>
          <img src="./assets/logo512.png" width={100} alt="512" />
        </div>
        <div className="footer-items">
          <ul>
            <li>
              <Link
              activeClass="navbar-active-content"
              spy = {true}
              smooth = {true}
              offset = {-70}
              duration = {500}
              to ="heroSection"
              className="navbar-content">
                  Home
              </Link>
            </li>
            <li>
              <Link 
              activeClass="navbar-active-content"
              spy = {true}
              smooth = {true}
              offset = {-70}
              duration = {500}
              to ="about-section"
              className="navbar-content">
                  About Us
              </Link>
            </li>
            <li>
              <Link 
              activeClass="navbar-active-content"
              spy = {true}
              smooth = {true}
              offset = {-70}
              duration = {500}
              to ="courses"
              className="navbar-content">
                  Courses
              </Link>
            </li>
            <li>
              <Link 
              activeClass="navbar-active-content"
              spy = {true}
              smooth = {true}
              offset = {-70}
              duration = {500}
              to ="instructor"
              className="navbar-content">
                  Instructors
              </Link>
            </li>
            <li>
              <Link
              activeClass="navbar-active-content"
              spy = {true}
              smooth = {true}
              offset = {-70}
              duration = {500}
              to ="contactus"
              className="navbar-content">
                  Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-content-container">
        <p className="footer-content">Copyright X Coding Acaademy 2024</p>
      </div>
    </footer>
  );
}
