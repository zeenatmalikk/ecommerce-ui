import React from "react";
import Container from "@mui/material/Container";
import "./ProductPg.css";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
const ProductPg = () => {
  return (
    <div>
      <Container>
        <div className="wrapper">
          <div className="img-container">
            <img
              src="https://i.ibb.co/S6qMxwr/jean.jpg"
              height="90vh"
              alt=""
              width="100%"
            />
          </div>
          <div className="info-container">
            <h5 className="info-title">Denim Jumpsuit</h5>
            <h6 className="info-desc">
              Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </h6>

            <h3 className="price">$20</h3>
            <div className="filter-sort">
              <select>
                <option disabled selected>
                  Color
                </option>
                <option>Blue</option>
                <option>Red</option>
                <option>Green</option>
                <option>White</option>
                <option>Yellow</option>
              </select>

              <h2 className="filter-text">Sort</h2>
              <select>
                <option disabled selected>
                  Size
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="add-container">
              <div className="amt-container">
                <Remove />
                <p>1</p>
                <Add />
              </div>
              <Button variant="outlined">Add to Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPg;
