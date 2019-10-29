import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const DataMap = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZWpvaG5zdDIiLCJhIjoiY2pvaWVrd2JwMDJtaDNwbXU1aWVrbXM0diJ9.TPpbd8963yEBwTe17X_Rbw'
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
};

export default { DataMap };
