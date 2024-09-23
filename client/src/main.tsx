import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Bootstrap JavaScript for UI components
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import custom CSS styles
import "./index.css";

// Import the components/pages used in the router
import App from "./App";
import ErrorPage from "./pages/errorPage.tsx";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import UserPage from "./pages/userpage.tsx";
import BookPage from "./pages/bookPage.tsx";

// Define the routes for the application using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // The main app component
    errorElement: <ErrorPage />, // Fallback error page for any unhandled errors
    children: [
      {
        index: true, // Default route for the root, renders the Home component
        element: <Home />,
      },
      {
        path: "login", // Route for the login page
        element: <Login />,
      },
      {
        path: "userPage", // Route for the user profile page
        element: <UserPage />,
      },
      {
        path: "bookPage", // Route for the book details page
        element: <BookPage />,
      },
      {
        path: "*", // Wildcard route for any undefined paths, renders the ErrorPage
        element: <ErrorPage />,
      },
    ],
  },
]);

// Render the application using React's ReactDOM.createRoot and the RouterProvider for routing
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
