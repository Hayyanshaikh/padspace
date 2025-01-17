import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import routes from "./components/layout/Routes"; // Ensure routes.ts is correctly typed

// Ensure routes are correctly typed as an array of RouteObject
const router = createBrowserRouter(routes as RouteObject[]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
