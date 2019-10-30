import React, { Fragment } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import WorldMap from './WorldMap'
import Header from './Header'

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
    <Fragment>
      <Header />
      <WorldMap info={data.allEarthquakes} />
    </Fragment>
  )
}

export default InitMap;
