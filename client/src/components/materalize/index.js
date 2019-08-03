import React from "react";

export function Container(props) {
  return <div className="container">{props.child}</div>;
}

export function Row(props) {
  return <div className="row">{props.child}</div>;
}

export function Column(props) {
  return <div className={`col ${props.size}`}>{props.child}</div>;
}
