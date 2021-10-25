import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CommmentList from "./components/CommmentList";
import { useCommentLayerValue } from "./context/CommentsContext";

const Comments = () => {
  const [{ comments }, dispatch] = useCommentLayerValue();
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    if (!content && content.length < 1) return;

    const newComment = {
      id: Math.floor(Math.random() * 123),
      content,
    };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });

    setContent(" ");

    event.preventDefault();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="comment-form">
        <FormGroup>
          <Label for="exampleText" size="lg">
            Yorumlarınız
          </Label>
          <Input
            type="textarea"
            className="comment-input"
            name="text"
            id="exampleText"
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
          <Button
            className="my-5 comment-buton"
            size="lg"
            color="primary"
            disabled={!content && content.length < 1}
            block
          >
            Yorum Ekle
          </Button>
        </FormGroup>
      </Form>

      <CommmentList comments={comments} />
    </div>
  );
};

export default Comments;
