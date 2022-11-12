import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { FC } from "react";
import { mapStyles } from "../utils/mapStyles";
import markerIcon from "../icons/marker.svg";

interface MapProps {
  location: {
    lat: number;
    long: number;
  };
}

export const Map: FC<MapProps> = ({ location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_MAP_API}`,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    mapTypeControlOptions: null,
    keyboardShortcuts: false,
  };

  const center = { lat: location.lat, lng: location.long };

  return (
    <>
      {isLoaded ? (
        <div className="w-[300px] h-[150px] relative min-[420px]:w-[400px] min-[420px]:h-[220px]">
          <GoogleMap
            zoom={1}
            center={center}
            mapContainerStyle={mapContainerStyle}
            options={options}
          >
            <Marker
              position={center}
              icon={{
                url: markerIcon,
                scaledSize: new google.maps.Size(30, 30),
              }}
            />
          </GoogleMap>{" "}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};
