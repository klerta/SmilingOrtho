import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Root from "./routes/root.jsx";
import ContactUs from "./routes/contactUs.jsx";
import Home from "./routes/home.jsx";

import Whoweare from "./routes/Whoweare.jsx";
import Getaquote from "./routes/Getaquote.jsx";
import Products from "./routes/products.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/whoarewe",
        element: <Whoweare />,
      },
      {
        path: "/getaquote",
        element: <Getaquote />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
