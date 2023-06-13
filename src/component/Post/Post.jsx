import React from "react";
import "./post.css";
import { Link, useNavigate, } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleNavigation = ()=>{
  navigate(`/post/${id}`)
  }  
  return (
    <div className="post">
      <h3>{id}</h3>
      <h5>{title}</h5>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details Post</button>
      </Link>
      <button onClick={handleNavigation}>Handle btn</button>

    </div>
  );
};

export default Post;
