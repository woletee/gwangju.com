import React, { useState } from "react"; // Make sure to import useState
import "./Hotelcard.css"; // Import the CSS file for styling

// SearchBar component
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    // Optionally, you could prevent the default action if this were inside a form
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

// HotelCard component
const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
      <div className="hotel-details">
        <h2 className="hotel-name">{hotel.name}</h2>
        <div className="hotel-rating">{`Rating: ${hotel.rating}`}</div>
        <div className="hotel-reviews">{`${hotel.reviews} reviews`}</div>
        <div className="hotel-price">
          <span className="price-original">{`$${hotel.originalPrice}`}</span>
          <span className="price-discounted">{`$${hotel.discountedPrice}`}</span>
        </div>
        <button className="check-availability">Check Availability</button>
      </div>
    </div>
  );
};

export { HotelCard, SearchBar };
