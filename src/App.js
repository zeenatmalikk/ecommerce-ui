import React from "react";
import Home from "./Component/Home";
import ProductList from "./Pages/ProductList/ProductList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductPg from "./Pages/Product.js/ProductPg";
// import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";

import Register from "./Pages/REgister/Register";
const App = () => {
  // const user = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<ProductPg />} />
          <Route path="/login" element={<Login />}>
            {/* {user? <useNavigate to='/'/>:<Login/>} */}
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
