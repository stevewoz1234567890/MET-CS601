import React from 'react';
import PropTypes from 'prop-types';

function InventoryItem({ SKU, name, qty, price, description, image }) {
  return (
    <div className="inventory-item">
      <img src={image} alt={name} className="product-image" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

InventoryItem.propTypes = {
  SKU: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default InventoryItem;
