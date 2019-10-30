import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import InitMap from './InitMap'

const ALL_EARTHQUAKES_QUERY = gql`
  query Coordinates {
    allEarthquakes {
      latitude
      longitude
    }
  }
`;

const GraphTest = () => {
  const { loading, error, data } = useQuery(ALL_EARTHQUAKES_QUERY)
  if (loading) return 'loading...';
  if (error) return error.message;
  console.log(data)

  return(
    <InitMap coordinates={data.allEarthquakes} />
  )
}

export default GraphTest;
