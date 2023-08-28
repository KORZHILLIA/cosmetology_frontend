import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import Spinner from '../Spinner/Spinner';
// import defaultOptions from './defaultOptions';

export default function Map() {
const GOOGLE_KEY = process.env.GOOGLE_MAPS_API as string;
    
const containerStyle = {
    width: '280px',
    height: '218px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    };
    
const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_KEY,
});
    const center = {
  lat: 38.745,
  lng: 45.523
    };
    
  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map: any) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(() => setMap(null), []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    //   options={defaultOptions}
    >
      {/* <DefaultMarker position={center} /> */}
    </GoogleMap>
  ) : (
    <Spinner />
  );
};