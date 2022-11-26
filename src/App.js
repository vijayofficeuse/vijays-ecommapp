import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';

import Header from './Components/Common/Header.js';
import Footer from './Components/Common/Footer.js';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Category from './Components/Category.js';
import Product from './Components/Product.js';
import Cart from './Components/Cart.js';
import NoPage from './Components/NoPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          id="content-ecom"
          className="ui container"
          style={{ marginTop: '5.5em' }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/{:id}" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
