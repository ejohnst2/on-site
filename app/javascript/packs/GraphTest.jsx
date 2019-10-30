import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import InitMap from './InitMap'

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

const GraphTest = () => {
  const { loading, error, data } = useQuery(MAP_INFO_QUERY)
  if (loading) return 'loading...';
  if (error) return error.message;

  return(
    <InitMap info={data.allEarthquakes} />
  )
}

export default GraphTest;
