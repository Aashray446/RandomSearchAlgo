import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import "./index.css";
import ControlPanel from "./pages/contolPanel";
import Playground from "./pages/playground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Playground />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-full flex flex-row">
      <ControlPanel ></ControlPanel>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
