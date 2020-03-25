import React from "react"
import GoogleMapReact from "google-map-react"

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk"

const Map: React.FC<{
  center: {
    lat: number
    lng: number
  }
}> = ({ children, center }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={13}
      options={{
        zoomControl: false,
        panControl: false,
        draggable: false
      }}
    >
      {children}
    </GoogleMapReact>
  )
}

export default Map
