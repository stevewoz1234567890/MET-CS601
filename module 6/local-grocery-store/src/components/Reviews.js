import React from 'react';
import '../styles/Reviews.css';

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h3>Customer Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.name}</strong></p>
            <p>"{review.comment}"</p>
            <p>Rating: {review.rating}/5</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Reviews;
