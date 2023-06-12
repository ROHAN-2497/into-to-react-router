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
        path:  '/',
        element:<First></First>
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
