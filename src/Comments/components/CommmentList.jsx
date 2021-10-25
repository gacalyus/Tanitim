import React from "react";
import Comment from "./Comment";

const CommmentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommmentList;
