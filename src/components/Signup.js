import { useRef, useState } from "react";
import "../styles/signup.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch {
      setError("failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Sign Up</h2>

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
            <div className="form-control" id="password-confirm">
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required></input>
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
                Sign UP
              </button>
            )}
          </form>
        </div>
        <div className="text">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
