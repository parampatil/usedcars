import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setToken(response.data.access_token);
        navigate("/", { replace: true });
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid bg-light rounded p-4 m-4">
        <h1 className="text-center mb-4">Login Page</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                Login
              </button>
            </form>
            <div className="mt-3">
              <p>
                Don't have an account?{" "}
                <a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
