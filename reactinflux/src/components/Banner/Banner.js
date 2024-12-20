import React from "react";
import Navbar from "../Navbar/Navbar";

function Banner() {
  return (
    <section className="banner-image">
      <Navbar />
      <div className="text-white">
        <h1 style={{ letterSpacing: "20px" }} className="fs-50px fs-17px">
          MVP SUBSCRIPTION
        </h1>
        <p className="fs-24px cust-fs-14px">
          Your go&ndash;to Movie Membership Program
        </p>
      </div>
    </section>
  );
}

export default Banner;
