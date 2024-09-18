import { Outlet } from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
