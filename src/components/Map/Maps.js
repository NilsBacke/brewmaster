import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Maps = ({ brewery }) => {
  const [pos, setPos] = useState({ lat: null, lng: null });
  const [hasPos, setHasPos] = useState(false);

  console.log(brewery);

  useEffect(() => {
    if (brewery && brewery.latitude != null && brewery.longitude != null) {
      setHasPos(true);
      setPos({
        lat: parseFloat(brewery.latitude),
        lng: parseFloat(brewery.longitude),
      });
    }
  }, [brewery]);

  const mapStyles = {
    height: "30vh",
    width: "100%",
  };

  return (
    <>
      {!!hasPos && (
        <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={pos}>
          <Marker
            key={Math.random().toString()}
            title={brewery.name}
            position={pos}
          />
        </GoogleMap>
      )}
    </>
  );
};
export default Maps;
