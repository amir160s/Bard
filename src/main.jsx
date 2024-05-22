import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Pages/Home/Home";
import ListedBooks from "./components/Pages/ListedBooks/ListedBooks";
import PToRead from "./components/Pages/PToRead/PToRead";
import DetailsBook from "./components/Pages/DetailsBook/DetailsBook";
import Read from "./components/Pages/ListedBooks/Read";
import Wish from "./components/Pages/ListedBooks/Wish";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import OurPurpose from "./components/Pages/OurPurpose/OurPurpose";
import Contact from "./components/Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listedbooks/read",
            element: <Read></Read>,
          },
          {
            path: "/listedbooks/wish",
            element: <Wish></Wish>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PToRead></PToRead>,
      },
      {
        path: "/book-details/:bookId",
        loader: () => fetch("/bookData.json"),
        element: <DetailsBook></DetailsBook>,
      },
      {
        path: "/ourpurpose",
        element: <OurPurpose></OurPurpose>,
      },
      {
        path: "/contact",
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
