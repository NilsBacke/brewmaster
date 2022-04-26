import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Maps = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%"};
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCMhJsgxNrVxDBkPYv1yGQZack3EYGw-hE'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={20}
          center={defaultCenter}>
            <Marker position={defaultCenter}/>
        </GoogleMap>
     </LoadScript>
  )
}
export default Maps;