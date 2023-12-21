import React from "react";
import { ListGroupItem } from "react-bootstrap";

function CommentComp(props) {
  console.log(props.comment.comment);

  return <ListGroupItem>{props.comment.comment}</ListGroupItem>;
}
export default CommentComp;
