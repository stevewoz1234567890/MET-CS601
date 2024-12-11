import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Reviews from './components/Reviews';
import './styles/ItemDetail.css';

function ItemDetail() {
  const { sku } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/data/inventory.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedItem = data.find((product) => product.SKU === sku);
        setItem(selectedItem);
        setLoading(false);
      });
  }, [sku]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Product not found.</p>;
  }

  // Example reviews
  const exampleReviews = [
    { name: 'John Doe', comment: 'Fresh and delicious!', rating: 5 },
    { name: 'Jane Smith', comment: 'Great value for the price.', rating: 4 },
  ];

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p className="description">{item.description}</p>
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <p><strong>SKU:</strong> {item.SKU}</p>
        <p><strong>Quantity:</strong> {item.qty}</p>
        <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
      </div>
      <Link to="/" className="home-button">Home</Link>
      <Reviews reviews={exampleReviews} />
    </div>
  );
}

export default ItemDetail;
