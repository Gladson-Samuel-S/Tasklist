import Navlinks from "./Navlinks";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUserShield } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  const { currentUser, logout } = useAuth();

  const [error, setError] = useState("");

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("./login");
    } catch {
      setError("Failed to Logout");
    }
  }

  return (
    <header>
      <div className="nav-container">
        <div className="burger" open={open} onClick={changeOpen}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="logo">
          <h1>Todolist</h1>
        </div>
      </div>

      <Navlinks open={open} />

      <div className="dropdown">
        <button className="btn">
          <FaUserShield style={{ cursor: "pointer", fontSize: "18px" }} />
          <FaCaretDown
            style={{
              marginLeft: "20px",
              fontSize: "15px",
            }}
          />
        </button>
        <div className="dropdown-content">
          <button>{currentUser.email}</button>
          <button style={{ color: "red" }} onClick={handleLogout}>
            Logout
          </button>

          {error && <div className="alert">{error}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
