import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import CommentComp from "./CommentComp";

function CommentAreaComp(props) {
  const [arrayOfComment, setArrayOfComment] = useState([]);

  async function fetchAllComment(bookObj) {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + bookObj.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTMwZWI1MjViYjAwMThlZDA4NWQiLCJpYXQiOjE3MDMxNzA4MzAsImV4cCI6MTcwNDM4MDQzMH0.9n2eRQgmuK1vg7nUg41-0wLKmsYbqbpso16FWCM0ZL8",
        },
      });

      if (response.ok) {
        const arrayCommentObj = await response.json();
        console.log(arrayCommentObj);
        setArrayOfComment(arrayCommentObj);
        console.log(arrayOfComment);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  useEffect(() => {
    console.log("sono come un  componentDidMount");
    fetchAllComment(props.bookObj);
  }, []);

  return (
    <ListGroup>
      {arrayOfComment.map((comment) => (
        <CommentComp key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
}
export default CommentAreaComp;
