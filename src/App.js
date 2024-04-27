import React, { useState } from "react";
import { HotelCard, SearchBar } from "./components/Hotelcard/Hotelcard"; // Assuming SearchBar is exported from the same file
import "./NavigationTabs.css";

const App = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Hotels"); // Changed from "Hotel" to "Hotels"

  // Example data for hotels, make sure each hotel has a unique 'id'
  const hotels = [
    {
      id: 1,
      name: "Hotel Sunshine",
      rating: 4.5,
      reviews: 150,
      originalPrice: 120,
      discountedPrice: 100,
      imageUrl: "path/to/hotel/sunshine/image.jpg",
    },
    {
      id: 2,
      name: "Hotel Sunshine",
      rating: 4.5,
      reviews: 150,
      originalPrice: 120,
      discountedPrice: 100,
      imageUrl: "path/to/hotel/sunshine/image.jpg",
    },
    {
      id: 3,
      name: "Hotel Sunshine",
      rating: 4.5,
      reviews: 150,
      originalPrice: 120,
      discountedPrice: 100,
      imageUrl: "path/to/hotel/sunshine/image.jpg",
    },
    {
      id: 4,
      name: "Hotel Sunshine",
      rating: 4.5,
      reviews: 150,
      originalPrice: 120,
      discountedPrice: 100,
      imageUrl: "path/to/hotel/sunshine/image.jpg",
    },
    // Additional hotels...
  ];

  // Function to handle tab click and search
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (searchTerm) => {
    console.log("Search for:", searchTerm);
    // Implement search functionality here
  };

  const handleLogoClick = () => {
    setActiveTab("Hotels");
  };

  return (
    <div className="app">
      <header className="nav-container">
        <div className="top-bar">
          <div className="website-name" onClick={handleLogoClick}>
            <span style={{ cursor: "pointer" }}>gwangju.com</span>
          </div>
          <nav className="nav-bar">
            {["Hotels", "Restaurants", "Shoppings", "Places"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`nav-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>
      {activeTab === "Hotels" && <SearchBar onSearch={handleSearch} />}
      <aside>{/* Filter components */}</aside>
      <main>
        {activeTab === "Hotels" &&
          hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}
        {/* Implement other tab content here */}
      </main>
    </div>
  );
};

export default App;
