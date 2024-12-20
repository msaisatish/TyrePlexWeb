import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/About/AboutSection";
import FAQSection from "./components/FAQ/FAQSection";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
