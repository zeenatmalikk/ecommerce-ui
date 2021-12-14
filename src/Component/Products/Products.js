import React, { useState, useEffect } from "react";
import "./Products.css";
import { popularProducts } from "../../Data";
import Container from "@mui/material/Container";
import Product from "./Product";
import { Grid } from "@material-ui/core";
import axios from "axios";
const Products = ({ cat, filters, sort }) => {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const res = await axios.get(
    //       cat
    //         ? `http://localhost:5000/api/products?category=${cat}`
    //         : `http://localhost:5000/api/products`
    //     );
    //     setproducts(res.data);
    //     console.log(res.data.title);
    //   } catch (error) {
    //     // console.log(error);
    //   }
    // };
    // getProducts();
    axios
      .get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : `http://localhost:5000/api/products`
      )
      .then((res) => {
        console.log("response", res);
        setproducts(res.data);
        console.log(res.data.title);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filteredProducts);

  return (
    <div
      style={{
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="pds-container">
        <Grid container>
          {filteredProducts.map((item) => (
            <Grid item md={3} xs={12}>
              <Product item={item} key={item.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
