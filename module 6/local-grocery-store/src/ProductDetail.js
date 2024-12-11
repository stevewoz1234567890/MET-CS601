import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductDetail({ SKU, name, qty, price, description, image }) {
  return (
    <div className="product-detail">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p><strong>SKU:</strong> {SKU}</p>
      <p><strong>Quantity Available:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p><strong>Description:</strong> {description}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

// Define PropTypes for type-checking
ProductDetail.propTypes = {
  SKU: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductDetail;
