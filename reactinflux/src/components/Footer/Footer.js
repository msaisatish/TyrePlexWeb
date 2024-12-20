import React from "react";
import rightarrow from "../Assets/right-arrow.png";
function Footer() {
  return (
    <div className="footer-blur d-sm-block d-md-none d-block footer-section">
      <button className="footer-get_started">
        Get Started <img src={rightarrow} alt="Right Arrow" height="20" />
      </button>
      <p className="text-center text-white">
        Marcus MVP is only available for use in our Mobile App
      </p>
    </div>
  );
}

export default Footer;
