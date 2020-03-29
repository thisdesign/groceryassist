import React, { useState, useEffect } from "react"
import GoogleMapReact from "google-map-react"

const GOOGLE_MAP_API_KEY = "AIzaSyAezbHQ150lx33Q0me17ROGTboEyd-7K5o"

const Map: React.FC<{
  center: {
    lat: number
    lng: number
  }
}> = ({ children, center }) => {
  const [mapApiData, setMapApiData] = useState(null)

  const drawRadius = () => {
    const MILES = 2.3

    return new mapApiData.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0,
      strokeWeight: 1,
      fillColor: "#FF0000",
      fillOpacity: 0,
      map: mapApiData.map,
      center,
      radius: 1609 * MILES
    })
  }

  useEffect(() => {
    const updateZoom = () => {
      if (mapApiData) {
        const radius = drawRadius()
        const { map } = mapApiData
        map.fitBounds(radius.getBounds())
      }
    }

    updateZoom()

    window.addEventListener("resize", updateZoom)

    return () => {
      window.removeEventListener("resize", updateZoom)
    }
  }, [mapApiData])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={12}
      onGoogleApiLoaded={data => setMapApiData(data)}
      options={{ fullscreenControl: false }}
    >
      {children}
    </GoogleMapReact>
  )
}

export default Map
