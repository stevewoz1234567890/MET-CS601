// InventoryList.js
import React, { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';

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
        <InventoryItem key={item.SKU} {...item} />
      ))}
    </div>
  );
}

export default InventoryList;
