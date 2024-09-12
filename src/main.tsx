import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Advertisments from "./pages/advertisements";
import Orders from "./pages/orders";
import Advertisment from "./pages/adverisment";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
    <NextUIProvider>
      <Provider store={store}>
        <main className="dark text-foreground bg-background min-h-screen">
          <RouterProvider router={router} />        
        </main>
      </Provider>
    </NextUIProvider>
  </StrictMode>
);
