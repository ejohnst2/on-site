import React from 'react';
import ReactDOMServer from "react-dom/server";


const Popup = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <a href={props.details}>Check out more details</a>
    </div>
  )
}

export default Popup;
