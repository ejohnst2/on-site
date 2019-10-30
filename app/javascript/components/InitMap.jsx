import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import WorldMap from './WorldMap'

const MAP_INFO_QUERY = gql`
  query MapInfo {
    allEarthquakes {
      latitude
      longitude
      title
      details
    }
  }
`;

const InitMap = () => {
  const { loading, error, data } = useQuery(MAP_INFO_QUERY)
  if (loading) return 'loading...';
  if (error) return error.message;

  return(
    <WorldMap info={data.allEarthquakes} />
  )
}

export default InitMap;
