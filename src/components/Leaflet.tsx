import React from "react";
import { MapContainer, TileLayer, useMap, ImageOverlay, Marker, Popup, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Leaflet() {
  return (
    // <MapContainer center={[51.505, -0.09]} zoom={0} scrollWheelZoom={false} attributionControl={false}>
    //   <ImageOverlay
    //     url='https://res-console.cloudinary.com/dmsbnzlcf/media_explorer_thumbnails/975065ea2883c237dbfedd10f38512c5/detailed'
    //     bounds={[
    //       [0, 0],
    //       [1000, 500],
    //     ]}
    //   />
    // </MapContainer>
    <div className='w-[1000px] h-[700px]'>
      <MapContainer
        style={{
          backgroundImage:
            "url(https://res-console.cloudinary.com/dmsbnzlcf/media_explorer_thumbnails/975065ea2883c237dbfedd10f38512c5/detailed)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        center={[51.505, -0.09]}
        zoom={0}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        className='w-full h-full'
        attributionControl={false}
      >
        <Rectangle
          bounds={[
            [300, 0.0],
            [10, 150],
          ]}
          color='white'
        />

        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Leaflet;
