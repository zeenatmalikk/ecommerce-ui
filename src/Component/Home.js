import React from "react";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Slider from "./Slider/Slider";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
