import React from 'react'
import mapboxgl from 'mapbox-gl';


const DataMap = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZWpvaG5zdDIiLCJhIjoiY2pvaWVrd2JwMDJtaDNwbXU1aWVrbXM0diJ9.TPpbd8963yEBwTe17X_Rbw'
  });

  return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '70vh',
          width: '70vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.13235092163085938,51.518250335096376]} />
        </Layer>
      </Map>
  )
};



export default DataMap;
