// Import the Outlet component to render child routes
import { Outlet } from "react-router-dom";
// Import the Header component
import Header from "./pages/header";
// Import the Footer component
import Footer from "./pages/footer";

// The main App component that serves as the layout for the entire application
function App() {
  return (
    // Flexbox container to keep the layout vertically aligned and responsive
    <div className="d-flex flex-column min-vh-100">
      {/* Render the Header at the top of the page */}
      <Header />

      {/* Main content area where child routes will be rendered via Outlet */}
      <main className="flex-grow-1 d-flex">
        {/* Placeholder for the child components based on the current route */}
        <Outlet />
      </main>

      {/* Render the Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
