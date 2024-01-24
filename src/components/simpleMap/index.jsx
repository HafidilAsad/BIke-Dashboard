import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = -6.1734157;
  const longitude = 106.936133;

  //   const latitude = 106.936133;
  //   const longitude = -6.1734157;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={23}
      ref={mapRef}
      style={{ height: "50vh", width: "63vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default SimpleMap;
