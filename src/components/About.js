import { Link, links } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h3 style={{ marginBottom: "20px" }}>About</h3>
      <p style={{ marginBottom: "20px" }}>
        ➡️ Simple, clean and Responsive UI. Manage tasks and ideas that pop up
        in your mind save it for future reference.
        <br></br>
        ➡️ Free up mental space , Get more done with the Todolist Web App
      </p>
      <p className="author">Author: Gladson Samuel S</p>
      <Link to="./" style={{ textDecoration: "none" }}>
        Go Back
      </Link>
    </div>
  );
};

export default About;
