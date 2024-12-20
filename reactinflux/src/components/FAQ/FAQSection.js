import React, { useState } from "react";
import sideArrow from "../Assets/side-arrow.png"; // Adjust the path as needed

function FAQSection() {
  const [expanded, setExpanded] = useState(Array(4).fill(false));

  const toggleInfo = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const faqs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tellus ex. Pellentesque lobortis metus ac sem scelerisque?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tellus ex. Pellentesque lobortis metus ac sem scelerisque?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tellus ex. Pellentesque lobortis metus ac sem scelerisque?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tellus ex. Pellentesque lobortis metus ac sem scelerisque?",
  ];

  return (
    <section className="faq-section d-block">
      <h1 className="text-white mb-3">Frequently Asked Questions</h1>
      <hr className="hr-line-faq d-none d-sm-none d-md-block" />
      {faqs.map((faq, index) => (
        <div key={index} onClick={() => toggleInfo(index)}>
          <button className="btn-offer d-flex align-items-baseline">
            <img
              src={sideArrow}
              alt="side arrow icon"
              id={`icon${index + 1}`}
              style={{
                transform: expanded[index] ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease", // Smooth rotation
                width: "16px", // Adjust size as needed
                height: "16px",
                marginRight: "10px", // Spacing between icon and text
              }}
            />
            <span style={{ whiteSpace: "break-spaces" }}>{faq}</span>
          </button>
          {expanded[index] && (
            <div
              style={{ display: "block", padding: "5px", marginLeft: "15px" }}
            >
              <p className="text-justify faq-p-clr">
                In the insurance domain, skepticism abounds concerning the
                future of Social Security benefits...
              </p>
            </div>
          )}
          <hr className="hr-line-faq" />
        </div>
      ))}
    </section>
  );
}

export default FAQSection;
