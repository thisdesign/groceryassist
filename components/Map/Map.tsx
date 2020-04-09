import React, { useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

const GOOGLE_MAP_API_KEY = "AIzaSyAezbHQ150lx33Q0me17ROGTboEyd-7K5o"

const Map: React.FC<{
  center: {
    lat: number
    lng: number
  }
  radius: number
}> = ({ children, center, radius }) => {
  const [mapApiData, setMapApiData] = useState(null)

  const drawRadius = () => {
    return new mapApiData.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillColor: "#FF0000",
      fillOpacity: 0,
      map: mapApiData.map,
      center,
      radius: 1609 * radius,
    })
  }

  useEffect(() => {
    if (mapApiData) {
      const { map, maps } = mapApiData
      map.panTo(new maps.LatLng(center))
    }
  }, [mapApiData, center])

  useEffect(() => {
    const updateZoom = () => {
      if (mapApiData) {
        // TODO: Dont' draw a new one every time
        const mapRadius = drawRadius()
        const { map } = mapApiData
        map.fitBounds(mapRadius.getBounds())
      }
    }

    updateZoom()

    window.addEventListener("resize", updateZoom)

    return () => {
      window.removeEventListener("resize", updateZoom)
    }
  }, [mapApiData, radius])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={12}
      onGoogleApiLoaded={(data) => setMapApiData(data)}
      options={{ fullscreenControl: false }}
    >
      {children}
    </GoogleMapReact>
  )
}

export default Map
