import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/About/Contact/Contact.jsx";
import About from "./component/About/About.jsx";
import Header from "./component/Header/Header.jsx";
import Home from "./component/Home/Home.jsx";
import First from "./component/First/First.jsx";
import Friends from "./component/Friends/Friends.jsx";
import FriendDetail from "./component/FriendDetail/FriendDetail.jsx";
import Posts from "./component/posts/posts.jsx";
import PostDetail from "./component/PostDetail/PostDetail.jsx";
import ErrorCompo from "./component/ErrorCompo/ErrorCompo.jsx";

/* const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path : '/about',
    element: <About></About>
  }
]);  */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: '*',
        element: <ErrorCompo></ErrorCompo>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
