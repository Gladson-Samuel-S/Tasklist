import { useRef, useState } from "react";
import "../styles/signup.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch {
      setError("failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Log In</h2>

          {error && <div className="alert">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-control" id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required></input>
            </div>
            <div className="form-control" id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required></input>
            </div>

            {loading ? (
              <PulseLoader
                className="content-loader"
                color={"blue"}
                loading={loading}
                size={15}
              />
            ) : (
              <button disabled={loading} className="signup-btn">
                Log In
              </button>
            )}

            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <Link
                style={{ textDecoration: "none", marginTop: "10px" }}
                to="/forgotpassword"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
        <div className="text">
          Need an Account?<Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
