import { useState, useCallback } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useMediaQuery } from '@mui/material';

import googleMapOptions from '@/constants/googleMapOptions';

import Spinner from '../Spinner/Spinner';

export default function Map() {
    const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string;
    
    const isTablet = useMediaQuery('(min-width: 768px)');
    
const containerStyle = {
    width: isTablet ? '440px' : '100%',
    height: '485px',
    margin: '0 auto',
    border: '2px solid #1376F8',
    borderRadius: '8px',
    };    
    
const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_KEY,
});
    const center = {
  lat: 46.973489,
  lng: 31.981475
    };
    
  const [_, setMap] = useState(null);

  const onLoad = useCallback(
    (map: any) => {
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(() => setMap(null), []);

  return isLoaded ? (
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={googleMapOptions}
    >
      <MarkerF position={center} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};