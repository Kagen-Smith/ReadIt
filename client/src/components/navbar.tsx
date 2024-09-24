/**
 * Navbar component that displays a navigation bar with a logo, background images, and links.
 * The background images are shuffled and fetched from local storage or an API.
 * The component also checks the login status and displays appropriate links based on the user's authentication state.
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 *
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @remarks
 * - Uses `useState` and `useEffect` hooks for state management and side effects.
 * - Uses `useLocation` hook to detect route changes and reshuffle images.
 * - Fetches book cover images from local storage or an API and shuffles them.
 * - Checks user login status and displays different links based on authentication.
 *
 * @dependencies
 * - `react`
 * - `react-router-dom`
 * - `../assets/navLogo.png`
 * - `../utils/auth`
 * - `../api/nytAPI`
 */

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
  const [initialImages, setInitialImages] = useState<string[]>([]);
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
    const savedImages = localStorage.getItem("bookCovers");
    if (savedImages) {
      const parsedImages = JSON.parse(savedImages);
      setInitialImages(parsedImages);
      setShuffledImages(shuffleArray([...parsedImages]));
    } else {
      const fetchImages = async () => {
        const images = await bookCovers();
        setInitialImages(images);
        localStorage.setItem("bookCovers", JSON.stringify(images));
        setShuffledImages(shuffleArray([...images]));
      };
      fetchImages();
    }
  }, []);

  useEffect(() => {
    if (initialImages.length > 0) {
      setShuffledImages(shuffleArray([...initialImages]));
    }
  }, [location, initialImages]);

  return (
    <div className="navbar navbar-expand-lg" style={{ position: "relative" }}>
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
        <Link to="/">
          <img
            className="navbar-brand"
            src={NavLogo}
            alt="ReadIt Logo"
            style={{ maxHeight: "145px" }}
          />
        </Link>

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
            {!loginCheck ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  My Account
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/userPage" className="nav-link">
                    My Account
                  </Link>
                </li>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
