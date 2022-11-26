import React from 'react';
import Home from '../../Components/Home.js';
import About from '../../Components/About.js';
import Category from '../../Components/Category.js';
import Product from '../../Components/Product.js';
import Cart from '../../Components/Cart.js';
import NoPage from '../../Components/NoPage.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Content = () => {
  return (
    <div
      id="content-ecom"
      className="ui container"
      style={{ marginTop: '5.5em' }}
    >
      <BrowserRouter>
        <a className="item">
          <Link to={'/about'}>About</Link>
        </a>
        <a className="item">
          <Link to={'/category'}>Category</Link>
        </a>
        <a className="item">
          <Link to={'/cart'}>Cart</Link>
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/{:id}" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Content;
