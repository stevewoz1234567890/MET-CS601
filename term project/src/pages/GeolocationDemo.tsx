import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/GeolocationDemo.css";

interface Location {
  latitude: number;
  longitude: number;
  accuracy: number;
}

const GeolocationDemo: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
  
    setError(null);
    setLocation(null);
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
          setError(null);
        },
        (err) => {
          setError("Unable to retrieve your location. Please try again.");
        }
      );
    }, 500); // Simulated delay for UX
  };

  return (
    <div className="geolocation-container">
      <button onClick={() => navigate("/projects")} className="back-button">
        Back to Projects
      </button>
      <h1>Geolocation API Demo</h1>
      <p>Click the button below to get your current location.</p>
      <button onClick={fetchLocation} className="geo-button">Get Location</button>

      {error && <p className="geo-error">{error}</p>}

      {location && (
        <div className="geo-details">
          <h2>Your Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
        </div>
      )}
    </div>
  );
};

export default GeolocationDemo;
