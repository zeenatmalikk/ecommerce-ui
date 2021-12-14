import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@material-ui/core";
import  LocationCity  from "@mui/icons-material/LocationCity";
import "./Footer.css";
import  Mail  from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item md={3} xs={12}>
            <h2 className="f-head">Zeee</h2>
            <p className="f-desc">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
            </p>
          </Grid>
          <Grid item md={1} />
          <Grid item md={3} xs={12}>
            <h2 className="f-link-title">Useful Links</h2>
            <a href="#" target="_self">
              <p className="f-links">Home</p>
            </a>
            <a href="#" target="_self">
              <p className="f-links">Man fashion</p>
            </a>
            <a href="#" target="_self">
              <p className="f-links">Accessories</p>
            </a>
            <a href="#" target="_self">
              <p className="f-links">Order Tracking</p>
            </a>
            <a href="#" target="_self">
              <p className="f-links">Wishlist</p>
            </a>
          </Grid>
          <Grid item md={4} xs={12}>
            <h2 className="f-contact">Contact</h2>
            <div className="f-add">
                <LocationCity/>
              <p>A block, 123 street , Houston, USA 123123</p>
            </div>
            <div className='f-contact'>
                <Mail/>
                <p>zee123@gmail.com </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
