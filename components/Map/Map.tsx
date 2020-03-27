import React from "react"
import GoogleMapReact from "google-map-react"

const GOOGLE_MAP_API_KEY = "AIzaSyAezbHQ150lx33Q0me17ROGTboEyd-7K5o"

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
