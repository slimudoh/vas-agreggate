import React from "react";

function Image(props) {
  return (
    <img
      className={props.class}
      style={props.style}
      src={props.src}
      alt={props.name}
    />
  );
}

export default Image;
