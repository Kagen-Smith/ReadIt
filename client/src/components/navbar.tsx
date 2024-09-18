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
    console.log(loginCheck);
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
            {!loginCheck ? (
              <li className="nav-item">
                <Link to="/login">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    auth.logout();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//navbar for the page
