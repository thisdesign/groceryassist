import React, { useState, useEffect, useRef } from "react"
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
  const isMapLoaded = !!mapApiData
  const circle = useRef(null)
  const mileRadius = 1609 * radius

  /**
   * update pan
   */

  useEffect(() => {
    if (mapApiData) {
      const { map, maps } = mapApiData
      const latLng = new maps.LatLng(center)
      map.panTo(latLng)

      if (circle.current) {
        circle.current.setCenter(latLng)
      }
    }
  }, [isMapLoaded, center])

  /**
   * Draw radius
   */

  useEffect(() => {
    if (mapApiData) {
      const drawRadius = () => {
        return new mapApiData.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: "#FF0000",
          fillOpacity: 0,
          map: mapApiData.map,
          center,
          radius: mileRadius,
        })
      }

      circle.current = drawRadius()
    }
  }, [mapApiData])

  /**
   * Update zoom
   */

  useEffect(() => {
    const updateZoom = () => {
      if (mapApiData) {
        const { map } = mapApiData

        // update radius
        circle.current.setRadius(mileRadius)
        // update radius
        map.fitBounds(circle.current.getBounds())
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
      bootstrapURLKeys={{
        key: GOOGLE_MAP_API_KEY,
      }}
      defaultCenter={center}
      defaultZoom={12}
      onGoogleApiLoaded={(data) => setMapApiData(data)}
      options={{
        fullscreenControl: false,
      }}
    >
      {children}
    </GoogleMapReact>
  )
}

export default Map
