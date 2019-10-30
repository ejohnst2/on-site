import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`

const Header = () => {
  return(
      <Wrapper>
        <h2>10 Most Recent Earthquakes</h2>
        <p>See recent severe earthquakes from the U.S. Geological Survey, you can click into each to find more information.</p>
      </Wrapper>
    )
}

export default Header;
