import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./pages/Card.jsx";
import Layout from "./components/Layout.jsx";
import Error from "./pages/Error.jsx";
import ComplaintsDetails from "./components/ComplaintsDetails.jsx";

// React Router
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Card /> },
      { path: "complaint-details", element: <ComplaintsDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
