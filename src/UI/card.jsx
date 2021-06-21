import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Card = (props) => {
  return (
    <div className="row">
      <div className={props.col}>{props.children}</div>
    </div>
  );
};
export default Card;
