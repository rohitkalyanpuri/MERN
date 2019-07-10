import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { addComment, deleteComment } from "../../actions/post";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <form
        class="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment...."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment, deleteComment }
)(CommentForm);
