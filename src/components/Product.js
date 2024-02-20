import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import './Product.css';
import products from '../data/products'; // Import products data

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price }));
    toast.success(`${name} added to cart!`);
    console.log('Add to cart button clicked for product:', { id, name, price });
  };

  const getProductById = (productId) => {
    return products.find(product => product.id === productId);
  };

  const product = getProductById(id);

  // Function to render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="product">
      <img className="product-image" src={product.image} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        {/* <p>Description: {product.description}</p> */}
        <div className="star-rating">
          <span className="rating-label">Rating: </span>
          <div className="stars">
            {renderStarRating(product.rating)}
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
