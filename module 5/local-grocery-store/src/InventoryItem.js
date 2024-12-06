import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type-checking

function InventoryItem({ SKU, name, qty, price }) {
  return (
    <div className="inventory-item">
      <p><strong>SKU:</strong> {SKU}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Quantity:</strong> {qty}</p>
      <p><strong>Price:</strong> ${price.toFixed(2)}</p>
    </div>
  );
}

// Define PropTypes for type-checking
InventoryItem.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default InventoryItem;
