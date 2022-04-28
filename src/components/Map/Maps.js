import React,{ useEffect, useState }  from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getBrewery } from "../../services/breweries-service.js";

const  Maps = ({uid}) => {

  const [brewery, setBrewery] = useState(undefined);
  const [pos, setPos] = useState({'lat': null, 'lng':null})
  const [hasPos, setHasPos] = useState(false)

  useEffect(() => {
      getBrewery(uid).then((res) => {
        setBrewery(res);
        if (res.latitude != null && res.longitude != null){
          setHasPos(true);
          setPos({'lat':parseFloat(res.latitude), 'lng': parseFloat(res.longitude)});
        }
      });
    }, []);

  const mapStyles = {
    height: "30vh",
    width: "100%"};

  return (
     <>
     {!!hasPos && (
       <LoadScript
         googleMapsApiKey='AIzaSyCMhJsgxNrVxDBkPYv1yGQZack3EYGw-hE'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={pos}>
              <Marker key={Math.random().toString()}
               title= {brewery.name}
               position={pos}/>
          </GoogleMap>
       </LoadScript>)
     }
     </>
  )
}
export default Maps;