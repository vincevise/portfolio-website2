// components/GrayscaleMap.tsx
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 12.906, // Example coordinates (Bangalore)
  lng: 77.6444,
};

const grayscaleStyle = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  { featureType: "administrative.land_parcel", stylers: [{ color: "#bdbdbd" }] },
  { featureType: "poi", stylers: [{ color: "#eeeeee" }] },
  { featureType: "poi.park", stylers: [{ color: "#e5e5e5" }] },
  { featureType: "road", stylers: [{ color: "#ffffff" }] },
  { featureType: "transit.line", stylers: [{ color: "#e5e5e5" }] },
  { featureType: "water", stylers: [{ color: "#c9c9c9" }] },
];

const GrayscaleMap = () => {

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{ styles: grayscaleStyle }}
      />
    </LoadScript>
  );
};

export default GrayscaleMap;
