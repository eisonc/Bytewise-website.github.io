import { Link } from "react-scroll";
import React from "react";

export default Footer;

function Footer() {
  return (
    <footer className="footer-container">
      {/* <div className="footer-link-container">
        <div>
          <img src="./assets/nike.png" width={100} alt="512" />
        </div>        
      </div> */}
      <hr className="divider" />
      <div className="footer-content-container">
        <p className="footer-content">Copyright Bytewise Coding Academy 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
