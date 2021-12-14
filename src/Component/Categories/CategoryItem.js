import React from "react";
import Container from "@mui/material/Container";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const CategoryItem = ({ item }) => {
  return (
    <div>
      <Container>
        <Link to={`/products/${item.cat}`}>
          <img src={item.img} alt="" className="c-img" />

          <div className="c-info">
            <h1 className="c-title">{item.title}</h1>
            <Button variant="contained">SHOP NOW</Button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default CategoryItem;
