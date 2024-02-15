import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import Product from './components/Product';
import products from './data/products';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter.value);

  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        <Cart/>
      <h1>Products</h1>
      {products.map(product => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} />
      ))}
    
    </div>
  );
}

export default App;

