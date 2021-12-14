import React from "react";
import Container from "@mui/material/Container";
import { categories } from "../../Data";
import CategoryItem from "./CategoryItem";
import "./Category.css";
import { Grid } from "@material-ui/core";
const Categories = () => {
  return (
    <div>
      <Container className="c-container">
        <Grid container>
          {categories.map((item,key) => (
            <Grid item md={4} xs={12} key={item.id} className='c.info'>
              <CategoryItem item={item} key={key} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Categories;
