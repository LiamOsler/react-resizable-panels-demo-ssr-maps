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

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
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