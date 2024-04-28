import React, { useState } from "react";
import { HotelCard, SearchBar } from "./components/Hotelcard/Hotelcard"; // Assuming SearchBar is exported from the same file
import "./NavigationTabs.css";

const App = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Hotels"); // Changed from "Hotel" to "Hotels"

  // Example data for hotels, make sure each hotel has a unique 'id'
  const hotels = [
   const hotels = [
  {
    id: 1,
    name: "Acc_design Hotel",
    location: "226-11 Geumnam-ro, Gwangju, 61482, South Korea",
    imageUrl: "/path/to/image.jpg",
    description: "Smart hotel with amenities such as free Wi-Fi, air conditioning, and parking.",
    rating: 4.2,
    reviews: 150,
    originalPrice: 100,
    discountedPrice: 70
  },
  {
    id: 2,
    name: "CS Hotel",
    location: "128 Sangmupyeonghwa-ro, Seo-gu, Gwangju, 61964, South Korea",
    imageUrl: "/path/to/image2.jpg",
    description: "Located near the Gwangju Statue of Peace, offering traditional dining options.",
    rating: 4.5,
    reviews: 200,
    originalPrice: 120,
    discountedPrice: 90
  },
  // Add more hotels as needed
];

export default hotels;

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
