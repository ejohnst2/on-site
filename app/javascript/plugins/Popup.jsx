import React from 'react';
import ReactDOMServer from "react-dom/server";
import styled from 'styled-components';

const Window = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 200px;
  text-align: center;
`

const Title = styled.h3`
`

const Link = styled.a`
`


const Popup = (props) => {
  return (
    <Window>
      <Title>{props.title}</Title>
      <Link href={props.details}>Check out more details</Link>
    </Window>
  )
}

export default Popup;
