import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

const Styled = styled.div`
  color: #ff3636;
  font-family: monospace;
  font-size: 20px;
`;

const TEST_FIELD_QUERY = gql`
  query Test {
    testField
    newField
  }
`;

export default function Hello() {
  const { data, loading, error } = useQuery(TEST_FIELD_QUERY);

  if (loading) return 'loading...';
  if (error) return error.message;

  return <Styled>{data.testField}{data.newField}</Styled>;
}
