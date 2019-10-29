import React from 'react'
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { render } from 'react-dom'
import { setContext } from 'apollo-link-context';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Hello from './Hello';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = document
    .querySelector('meta[name=csrf-token]')
    .getAttribute('content');

  return {
    headers: {
      'X-CSRF-Token': token,
      ...headers,
    },
  };
});

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZWpvaG5zdDIiLCJhIjoiY2pvaWVrd2JwMDJtaDNwbXU1aWVrbXM0diJ9.TPpbd8963yEBwTe17X_Rbw'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
      </Map>
      <Hello />
    </ApolloProvider>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.body.appendChild(document.createElement('div')));
});
