import { NavLink, links } from "react-router-dom";

const Navlinks = ({ open }) => {
  return (
    <div className={open ? "header-info active" : "header-info"}>
      <ul>
        <li>
          <NavLink exact to="./" activeClassName="selected-nav">
            My Tasks
          </NavLink>
        </li>
        <li>
          <NavLink exact to="./completedtasks" activeClassName="selected-nav">
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink exact to="./about" activeClassName="selected-nav">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
