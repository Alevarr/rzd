import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeatsPage from "./pages/SeatsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/:id", element: <SeatsPage /> },
    ],
  },
]);

export default router;
