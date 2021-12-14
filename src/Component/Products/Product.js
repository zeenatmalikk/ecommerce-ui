import React from "react";
import Container from "@mui/material/Container";
import "./Products.css"
import Search from "@mui/icons-material/Search";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
const Product = ({ item }) => {
  return (
    <div>
      <Container className="pd-container">
        <div className="circle"></div>
        {/* <img src={item.img}/> */}
        <img src={item.img} className="pd-img" alt="" height="75%" />
        <div className="p-info">
          <div className="p-icon">
            <ShoppingBag />
          </div>
          <div className="p-icon">
            <Search />
          </div>
          <div className="p-icon">
            <Favorite />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
