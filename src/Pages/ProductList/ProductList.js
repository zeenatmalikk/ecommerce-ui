import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Products from "../../Component/Products/Products";
import "./ProductList.css";
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
console.log("categ",cat)
  const [filters, setfilters] = useState({});
  const [sort, setsort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setfilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);
 
  return (
    <div>
      <Navbar />
      <h1>Dress</h1>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className="filterContainer">
            <div className="filter">
              <h2 className="filter-text">Filter products:</h2>
              <select name="color" onChange={handleFilters}>
                <option disabled>
                  Color
                </option>
                <option>Blue</option>
                <option>Red</option>
                <option>Green</option>
                <option>White</option>
                <option>Yellow</option>
              </select>
              <h2 className="filter-text">Sort</h2>
              <select name="size" onChange={handleFilters}>
                <option disabled >
                  Size
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="filterContainer">
            <div className="filter">
              <h2 className="filter-text">Sort</h2>
              <select onChange={(e)=>setsort(e.target.value)}>
                <option value="newest">
                  Newest
                </option>
                <option value="asc">Price(asc)</option>
                <option value="dsc">Price(dsc)</option>
              </select>
            </div>
          </div>
        </Grid>
      </Grid>
      <Products cat={cat} filters={filters} sort={sort} />
    
    </div>
  );
};

export default ProductList;
