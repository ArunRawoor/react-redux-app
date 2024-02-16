// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import './Product.css';

// Import your images statically
import ProductImageA from '../Images/productA.jpg';
import ProductImageB from '../Images/productB.jpeg';
import ProductImageC from '../Images/productC.jpeg';
import ProductImageD from '../Images/productD.jpeg';
import ProductImageE from '../Images/productE.jpeg';
import ProductImageF from '../Images/productF.jpeg';


const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price }));
    console.log('Add to cart button clicked for product:', { id, name, price });
  };

  // Function to get the image for a specific product
  const getImageForProduct = (productId) => {
    switch (productId) {
      case 1:
        return ProductImageA;
      case 2:
        return ProductImageB;
      case 3:
        return ProductImageC;
      case 4:
        return ProductImageD;
      case 5:
        return ProductImageE;
      case 6:
        return ProductImageF;
      default:
        return null;
    }
  };

  // Get the image for the current product
  const productImage = getImageForProduct(id);

  return (
    <div className="product">
      <img className="product-image" src={productImage} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
