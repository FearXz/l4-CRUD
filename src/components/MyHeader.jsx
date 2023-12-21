import React from "react";
import NavbarComp from "./NavbarComp";
import { Container } from "react-bootstrap";

function MyHeader(props) {
  return <NavbarComp callbackSubmit={props.callbackSubmit} />;
}

export default MyHeader;
