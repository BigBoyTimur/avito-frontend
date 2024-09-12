import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/index.tsx";
import Advertisments from "./pages/advertisements";
import Orders from "./pages/orders/index.tsx";
import Advertisment from "./pages/adverisment/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Advertisments />,
      },
      {
        path: "advertisments/:id",
        element: <Advertisment />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
