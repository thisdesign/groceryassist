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

  // const drawRadius = () => {
  //   const radiusCircle = new mapApiData.maps.Circle({
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 1,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.1,
  //     map: mapApiData.map,
  //     center,
  //     radius: 5 * 1000
  //   })
  // }

  useEffect(() => {
    if (mapApiData) {
      // drawRadius()

      const updateZoom = () => {
        const map: HTMLDivElement = mapApiData.ref
        const { width, height } = map.getBoundingClientRect()
        const smallEdge = Math.min(width, height)

        let zoomFactor = 10.0
        if (smallEdge > 200) zoomFactor = 11
        if (smallEdge > 300) zoomFactor = 11.5
        if (smallEdge > 400) zoomFactor = 12
        if (smallEdge > 500) zoomFactor = 12.5
        if (smallEdge > 700) zoomFactor = 12.75
        if (smallEdge > 800) zoomFactor = 13
        if (smallEdge > 1100) zoomFactor = 13.5
        if (smallEdge > 1400) zoomFactor = 13.75

        mapApiData.map.setZoom(zoomFactor)
      }

      updateZoom()

      window.addEventListener("resize", updateZoom)

      return () => {
        window.removeEventListener("resize", updateZoom)
      }
    }
  }, [mapApiData])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={12}
      onGoogleApiLoaded={data => setMapApiData(data)}
    >
      {children}
    </GoogleMapReact>
  )
}

export default Map
