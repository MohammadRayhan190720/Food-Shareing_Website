import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const donationSpots = [
  {
    id: 1,
    name: "Community Center A",
    lat: 40.7128,
    lng: -74.006,
    details: "Open 9 AM - 5 PM",
  },
  {
    id: 2,
    name: "Food Bank B",
    lat: 40.73061,
    lng: -73.935242,
    details: "Open 10 AM - 6 PM",
  },
  {
    id: 3,
    name: "Shelter C",
    lat: 40.7216,
    lng: -73.9982,
    details: "Open 8 AM - 4 PM, Contact: 555-123-4567",
  },
  {
    id: 4,
    name: "Soup Kitchen D",
    lat: 40.7498,
    lng: -73.9875,
    details: "Open 7 AM - 3 PM, Contact: 555-234-5678",
  },
  {
    id: 5,
    name: "Charity Drop-off E",
    lat: 40.759,
    lng: -73.9845,
    details: "Open 10 AM - 8 PM, Contact: 555-345-6789",
  },
  {
    id: 6,
    name: "Donation Hub F",
    lat: 40.7309,
    lng: -74.0005,
    details: "Open 11 AM - 7 PM, Contact: 555-456-7890",
  },
];



const FoodDonationMap = () => {
  const [mapCenter] = useState([40.7128, -74.006]); // Keep the map center stable

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-Playfire  font-semibold text-center my-5">
        Interactive Food Donation Map
      </h2>
      <p className="text-center w-4/5 mx-auto mb-5 ">
        Discover nearby donation spots and food-sharing events with an
        interactive map featuring detailed information on availability, hours,
        and contacts for a seamless food-sharing experience.
      </p>
      <div className="h-screen rounded-lg overflow-hidden">
        <MapContainer center={mapCenter} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {donationSpots.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={markerIcon}
            >
              <Popup>
                <strong>{spot.name}</strong>
                <br />
                {spot.details}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default FoodDonationMap;
