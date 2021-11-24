import React, { useEffect, useRef } from "react";

import './Map.css';

const Map = (props) => {
  const mapRef = useRef();
  const { lat, lng, zoom } = props;

  useEffect(() => {
    const map =new window.google.maps.Map(mapRef.current, {
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: zoom,
    });

    new window.google.maps.Marker({
        position:{
            lat:lat,
            lng:lng
        },map:map
    })

  }, [zoom, lat, lng]);

  return <div ref={mapRef} className="map-wrapper"></div>;
};

export default Map;
