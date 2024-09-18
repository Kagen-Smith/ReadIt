import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

import App from "./App";
import ErrorPage from "./pages/errorPage.tsx";
import Home from "./pages/home.tsx";
// import Login from "./pages/login.tsx";
// import UserPage from "./pages/userpage.tsx";
// import PLACEHOLDER from "./pages/TBD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "userpage",
      //   element: <UserPage />,
      // },
      // {
      //   path: "TBD",
      //   element: <PLACEHOLDER />,
      // },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
