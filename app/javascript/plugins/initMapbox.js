import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWpvaG5zdDIiLCJhIjoiY2pvaWVrd2JwMDJtaDNwbXU1aWVrbXM0diJ9.TPpbd8963yEBwTe17X_Rbw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }
};

export { initMapbox };
