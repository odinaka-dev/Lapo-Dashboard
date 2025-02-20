import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./pages/Card.jsx";
import Layout from "./components/Layout.jsx";

// React Router
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Card /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Card /> */}
    <RouterProvider router={route} />
  </StrictMode>
);
