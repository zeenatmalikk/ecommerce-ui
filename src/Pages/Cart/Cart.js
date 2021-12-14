import React from "react";
import "./Cart.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
const Cart = () => {
  return (
    <div>
      <Container>
        <div className="c-wrapper">
          <h2 className="c-title">CART</h2>
          <div className="c-top">
            <button className="top-button">Continue shopping</button>
            <div className="top-texts">
              <h2 className="top-text">Shopping Bag(2)</h2>
              <h2 className="top-text">Ourwishlist(0)</h2>
            </div>
            <button className="top-button">Checkout Now</button>
          </div>
          <div className="c-bottom">
            <div className="c-info">
              <div className="p-cart">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="p-cart-dets">
                  <p>
                    Product name:<b>Thunder Shoes</b>
                  </p>
                  <p>
                    Product ID:<b>89898989</b>
                  </p>
                  <p>
                    Product Size<b>37.5</b>
                  </p>
                </div>
              </div>
              <div className="price-det">
                <div className="p-amt-container">
                  <Add />
                  <p className="p-amnt">2</p>
                  <Remove />
                </div>
                <div className="p-price-cart">$4</div>
              </div>
            </div>
          </div>
        </div>

      
      </Container>
      <Container style={{marginTop:'220px'}}>
      <div className="summary">
          <p className="summary-title">Order summary</p>
          <div className="summary-item">
            <p className="summ-text">Subtotal</p>
            <p className="summ-price">$ 80</p>
          </div>
          <div className="summary-item">
            <p className="summ-text">Estimated shipping</p>
            <p className="summ-price">$ 5.90</p>
          </div>{" "}
          <div className="summary-item">
            <p className="summ-text">Shipping discount</p>
            <p className="summ-price">$ -5.90</p>
          </div>
          <div className="summary-item">
            <p className="summ-text">Total</p>
            <p className="summ-price">$ 80</p>
          </div>
          <Button variant="outlined">Checkout</Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
