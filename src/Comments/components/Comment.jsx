import React from "react";
import { BsTrash } from "react-icons/bs";
import { useCommentLayerValue } from "../context/CommentsContext";

function Comment({ comment }) {
  const [{}, dispatch] = useCommentLayerValue();

  const removeComment = (commentId) => {
    dispatch({
      type: "REMOVE_COMMENT",
      payload: commentId,
    });
  };

  return (
    <div
      className="comment-row"
      style={{
        padding: "10px",
        margin: "5px",
        borderRadius: "5px",
        backgroundColor: "salmon",
      }}
    >
      {comment.content}

      <div>
        <BsTrash
          onClick={() => removeComment(comment.id)}
          style={{ paddingTop: "10px", width: "32px", height: "26px" }}
        />
      </div>
    </div>
  );
}

export default Comment;
