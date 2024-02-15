import React from 'react';
import './App.css';

import Product from './components/Product';
import products from './data/products';
import Cart from './components/Cart';




function App() {


  return (
    <div>
  
       <Cart />
      <h1>Products</h1>
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
      ))}


    </div>
  );
}

export default App;

