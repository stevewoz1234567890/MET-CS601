// App.js
import './App.css';
import React from 'react';
import InventoryList from './InventoryList';

function App() {
  return (
    <div className="app">
      <header className="header">
      <img src="favicon.ico" className="logo" alt="logo" />
        <h1>Local Grocery Store</h1>
      </header>
      <main>
        <h2>Inventory</h2>
        <InventoryList />
      </main>
      <footer>
        <p>© 2024 Local Grocery Store</p>
        <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default App;