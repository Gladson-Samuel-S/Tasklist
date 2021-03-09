import { Link, links } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h3 style={{ marginBottom: "20px" }}>About</h3>
      <p style={{ marginBottom: "20px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas
        numquam repudiandae, similique doloremque, quod possimus quidem illum,
        architecto alias accusantium tempora rerum nobis. Suscipit sequi
        exercitationem quod illum magni!
      </p>
      <Link to="./" style={{ textDecoration: "none" }}>
        Go Back
      </Link>
    </div>
  );
};

export default About;
