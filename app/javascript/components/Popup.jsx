import React from 'react';
import ReactDOMServer from "react-dom/server";
import styled from 'styled-components';

const Window = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 200px;
  text-align: center;
`

const Popup = (props) => {
  return (
    <Window>
      <h3>{props.title}</h3>
      <a href={props.details} target={'_blank'}>Check out more details</a>
    </Window>
  )
}

export default Popup;
