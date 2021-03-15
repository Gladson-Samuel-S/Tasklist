import { useRef, useState } from "react";
import "../styles/signup.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const Login = () => {
  const emailRef = useRef();
  const { forgotpassword } = useAuth();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await forgotpassword(emailRef.current.value);
      //   setTimeout(() => {
      //     history.push("/");
      //   }, 1000);
      setMessage("Check Your Inbox for further Instructions");
    } catch {
      setError("failed to reset Password");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Reset Password</h2>

          {error && <div className="alert">{error}</div>}
          {message && <div className="success">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-control" id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required></input>
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
                Reset Password
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
                to="/login"
              >
                login
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
