import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth.ts";
import { login } from "../api/authAPI.tsx";
import Logo from "../assets/logoOnly.png";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <section className="col-md-7 d-flex flex-column align-items-center text-center">
          <h2>Login to Your Account</h2>
          <img src={Logo} alt="logo" className="my-3" />
          <form
            className="w-100"
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px" }}
          >
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={loginData.email || ""}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={loginData.password || ""}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Submit
            </button>

            <Link to="/create-account" className="btn btn-secondary w-100">
              Create Account
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
//function for logging in
