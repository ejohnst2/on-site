import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Popup from '../plugins/Popup'
import ReactDOMServer from "react-dom/server";

import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const NewMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(eq => bounds.extend([ eq.geometry.coordinates[0], eq.geometry.coordinates[1] ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
  };

  useEffect(() => {
    mapboxgl.accessToken = process.env.MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/streets-v11`,
        center: [0, 0],
        zoom: 5
      });

     fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2019-10-22%2000:00:00&endtime=2019-10-29%2023:59:59&minmagnitude=2.5&orderby=time`)
      .then(response => response.json())
      .then( async data => {
        const earthquakes = data.features.slice(0,20);

        await earthquakes.forEach((eq) => {
          const lat = eq.geometry.coordinates[0]
          const lng = eq.geometry.coordinates[1]
          const popupContent = `<div>${eq.geometry}</div>`
          const popup = new mapboxgl.Popup().setHTML(popupContent);
          new mapboxgl.Marker()
            .setLngLat([ lat, lng ])
            .setPopup(popup)
            .addTo(map);
        })

        await fitMapToMarkers(map, earthquakes)
      })


      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default NewMap;
