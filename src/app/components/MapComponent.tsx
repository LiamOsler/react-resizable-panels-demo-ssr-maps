import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
 
const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 44.6476,
  lng: -63.5728
};

function MyComponent() {
  let apiKey:string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!; 


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null) // Fix: add type annotation to map state

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    if (map) {
      map.fitBounds(bounds);
      setMap(null);
      setMap(map);
    }
  }, [center])

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapTypeId = 'satellite'
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ lat: 44.6476, lng: -63.5728 }} />

      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)