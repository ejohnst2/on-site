import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Popup from '../plugins/Popup'
import ReactDOMServer from "react-dom/server";

import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const InitMap = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(m => bounds.extend([ m.latitude, m.longitude ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
  };


  useEffect(() => {
    mapboxgl.accessToken = `pk.eyJ1IjoiZWpvaG5zdDIiLCJhIjoiY2syY2RkbnlzMDBjajNoczJ6cm5vdmhvZiJ9.AGODb40hT0EL5Dx8RMLWog`;
    const initializeMap = async ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/streets-v11`,
        center: [0, 0],
        zoom: 5
      });

      await props.coordinates.forEach((point) => {
        const popupContent = `<div>${point.latitude}</div>`
        const popup = new mapboxgl.Popup().setHTML(popupContent);
        new mapboxgl.Marker()
          .setLngLat([ point.latitude, point.latitude ])
          .setPopup(popup)
          .addTo(map);
      })

      await fitMapToMarkers(map, earthquakes)

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default InitMap;
