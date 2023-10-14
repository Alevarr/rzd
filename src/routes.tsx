import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

export default router;
