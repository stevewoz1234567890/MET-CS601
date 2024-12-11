import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/InventoryList.css'; // Ensure the CSS file is imported

function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('./data/inventory.json')
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="inventory-list">
      {inventory.map((item) => (
        <Link key={item.SKU} to={`/item/${item.SKU}`} className="inventory-card">
          <div className="inventory-item">
            <p><strong>SKU:</strong> {item.SKU}</p>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Quantity:</strong> {item.qty}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default InventoryList;
