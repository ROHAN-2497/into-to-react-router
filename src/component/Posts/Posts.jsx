import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log()
  return (
    <div>
      <h3>Posts See you Bitch {posts.length}</h3>
      <div>
        {
          posts.map(post => <Post
          key={post.id}
          post={post}
          > </Post>)
        }
      </div>
    </div>
  );
};

export default Posts;
