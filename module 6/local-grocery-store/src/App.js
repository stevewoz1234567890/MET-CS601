import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './InventoryList';
import ItemDetail from './ItemDetail';
import NotFound from './components/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <img src="images/logo512.png" className="logo" alt="logo" />
          <h1>Local Grocery Store</h1>
        </header>

        {/* Main content with Routes */}
        <main>
          <h2>Inventory</h2>
          <Routes>
            <Route path="/" element={<InventoryList />} />
            <Route path="/item/:sku" element={<ItemDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>© 2024 Local Grocery Store</p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy-policy">Privacy Policy</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
