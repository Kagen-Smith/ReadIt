import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../assets/navLogo.png";
import auth from "../utils/auth";
import { bookCovers } from "../api/nytAPI";

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  const location = useLocation();

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await bookCovers();
      const shuffled = shuffleArray([...images]);
      setShuffledImages(shuffled);
    };
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className="navbar navbar-expand-lg mb-5 shadow"
      style={{ position: "relative" }}
    >
      <div
        className="d-flex flex-row"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {shuffledImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Book cover ${index}`}
            style={{
              height: "100%",
              objectFit: "cover",
              flex: "0 0 auto",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(231, 229, 208, 0.9))",
          zIndex: 1,
        }}
      ></div>

      <div
        className="container-fluid"
        style={{ position: "relative", zIndex: 2 }}
      >
        <img
          className="navbar-brand"
          src={NavLogo}
          alt="ReadIt Logo"
          style={{ maxHeight: "145px" }}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
          aria-controls="mainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0 h3">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/UserPage" className="nav-link">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/BookPage" className="nav-link">
                Book Page
              </Link>
            </li>

            {!loginCheck ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    auth.logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
