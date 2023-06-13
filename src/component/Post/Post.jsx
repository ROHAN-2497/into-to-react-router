import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h3>{id}</h3>
      <h5>{title}</h5>
      <Link to={`/post/${id}`}>Show Details</Link>
      <button>Show Details Post</button>
    </div>
  );
};

export default Post;
