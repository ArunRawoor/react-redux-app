import React from 'react';
import './App.css';
import Product from './components/Product';
import products from './data/products';
import Cart from './components/Cart';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Cart />
      <h1 style={{ textAlign: 'center' }}>All Products</h1>
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
      <footer className="footer">
        <div className="container row">
          <div className="footer-col">
            <h4>Matrical</h4>
            <ul>
              <li><Link to="/about">about us</Link></li>
              <li><Link to="/services">our services</Link></li>
              <li><Link to="/privacy">privacy policy</Link></li>
              <li><Link to="/visit-website">visit website</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">shipping</Link></li>
              <li><Link to="/returns">returns</Link></li>
              <li><Link to="/order-status">order status</Link></li>
              <li><Link to="/payment-options">payment options</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><Link to="/download">download</Link></li>
              <li><Link to="/changelog">changelog</Link></li>
              <li><Link to="/github">github</Link></li>
              <li><Link to="/all-version">all version</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link to="https://github.com/ArunRawoor/"><i className="fab fa-github"></i></Link>
              <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
              <Link to="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></Link>
              <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
              <Link to="https://www.linkedin.com/in/arun-rawoor-4a381723b/"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </div>
        <li className='copyrightfoot'>© {new Date().getFullYear()} Matrical. All rights reserved. Design and Developed by Arun Rawoor.</li>
      </footer>
    </div>
  );
}

export default App;
