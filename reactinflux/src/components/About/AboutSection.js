import React from "react";
import BenefitCard from "../Benefitcard/BenefitCard";
import star1 from "../Assets/teenyicons_star-solid-1.svg";
import star2 from "../Assets//teenyicons_star-solid-2.svg";
import star from "../Assets/teenyicons_star-solid.svg";
import rightarrow from "../Assets/right-arrow.png";
function AboutSection() {
  return (
    <section className="about-section text-white">
      <div className="container">
        <div className="row padding-abt-section fl-c-rev">
          <div className="col-md-12 col-lg-6">
            <div className="d-none d-md-block">
              <div>
                <img src={star} alt="star" />
                <img
                  style={{ transform: "translateY(-15px)" }}
                  src={star2}
                  alt="star"
                />
                <img src={star1} alt="star" />
              </div>
              <h1>Reel Deal Monthly Movies</h1>
              <p className="fs-22px">
                Your flexible monthly membership to the latest movies
              </p>
              <hr />
            </div>
            <h1 className="mt-25 fs-24px">What is MVP Subscription?</h1>
            <section className="d-flex flex-column">
              {[1, 2, 3].map((num) => (
                <div className="circle-container" key={num}>
                  <div>
                    <div className="circle">{num}</div>
                    {num < 3 && <div className="vertical-line"></div>}
                  </div>
                  <div className="text-container">
                    <p>
                      {num === 1 &&
                        "MVP Subscription provides the member 1 movie credit per month"}
                      {num === 2 &&
                        "Members can carry over unused movie credits to the next month"}
                      {num === 3 &&
                        "Exclusive discounts are available for MVP members on additional purchases"}
                    </p>
                  </div>
                </div>
              ))}
            </section>
            <div className="mt-4 mb-4 d-none d-sm-none d-md-block">
              <button className="btn-get_started">
                Get Started{" "}
                <img src={rightarrow} alt="Right Arrow" height="20" />
              </button>
              <span className="lm">Learn More</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <BenefitCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
