const MapMarker: React.FC<{ lat: any; lng: any }> = ({ lat, lng }) => (
  <>
    <div />
    <style jsx scoped>
      {`
        div {
          width: 1rem;
          height: 1rem;
          background: green;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
      `}
    </style>
  </>
);
export default MapMarker;
