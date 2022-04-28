import React from 'react'
import {Marker } from '@react-google-maps/api';


const Markers = (latitude,longitude) => {
  const pos = {
    lat: latitude,
    lng: longitude
  }
  const keyname = "marker"

  return (
            <Marker key={keyname}
              name="Brewssss"
              title="brewery here"
              position={pos}/>
  )
}
export default Markers;