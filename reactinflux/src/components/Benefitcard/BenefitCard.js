import React from "react";
import creditPerMonth from "../Assets/creditPerMonth.svg";
import rolloverOfUnusedCredits from "../Assets/rolloverOfUnusedCredits.svg";
import MMRPerks from "../Assets/MMRPerks.svg";
import flexible from "../Assets/100Flexible.svg";
import discountOnFoodAndBeverages from "../Assets/discountOnFoodAndBeverages.svg";
import convenienceFee from "../Assets/convenienceFee.svg";

function BenefitCard() {
  // const basePath = "src/components/Assets/";
  const benefits = [
    {
      src: creditPerMonth,
      title: "1 credit per month",
      text: "One 2D standard movie per month",
      sup: 1,
    },
    {
      src: rolloverOfUnusedCredits,
      title: "Free rollover of unused credits",
      text: "Unused credits will be combined the following month",
    },
    {
      src: MMRPerks,
      title: "All MMR perks included",
      text: "+ benefits",
    },
    {
      src: flexible,
      title: "100% Flexible",
      text: "Cancel anytime",
      sup: 2,
    },
    {
      src: discountOnFoodAndBeverages,
      title: "20% Discount on all Food and Beverages",
      text: "Excluding alcohol",
    },
    {
      src: convenienceFee,
      title: "0 Convenience Fees",
      text: "Waived on all days on any tickets purchase",
    },
  ];

  return (
    <div className="card-container">
      {benefits.map((benefit, index) => (
        <div className="benefit-card" key={index}>
          <img src={benefit.src} height="50" alt={benefit.title} />
          <h5 className="mt-4 clr-h-benefits">{benefit.title}</h5>
          <p className="clr-p-benefits">
            {benefit.text}
            <sup>{benefit.sup}</sup>
          </p>
        </div>
      ))}
      <span>
        <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to Passport
        Credits only. Other fees apply to full-priced tickets.
      </span>
      <></>
      <span>
        <sup>2</sup>Excludes alcoholic beverages
      </span>
    </div>
  );
}

export default BenefitCard;
