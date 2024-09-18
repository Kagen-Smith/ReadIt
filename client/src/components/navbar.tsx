import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HorizontalLogo from "../assets/baseLogoHorizontal.png";
import auth from "../utils/auth";

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

  return (
    <div className="navbar navbar-expand-lg mb-4">
      <div className="container-fluid">
        <img
          className="navbar-brand"
          src={HorizontalLogo}
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
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link to="/" className="nav-link h5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/UserPage" className="nav-link h5">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/BookPage" className="nav-link h5">
                Book Page
              </Link>
            </li>

            {!loginCheck ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link h5 disabled">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link h5"
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
