import React from "react";
import CardComp from "./CardComp";
import { Col, Row } from "react-bootstrap";

function MyDetail(props) {
  return (
    <Row className=" justify-content-center">
      <Col xs={4}>
        <CardComp book={props.bookObj} />
      </Col>
    </Row>
  );
}
export default MyDetail;
