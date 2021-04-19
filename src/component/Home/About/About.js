import React from "react";
import aboutImage from "../../../image/bg-shapes-2.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-row">
      <div className="about-left">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-right">
        <h1>A Short History About Us</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          maxime iure natus corrupti voluptatem quisquam dignissimos nihil,
          repudiandae sapiente. Quasi, mollitia facere, eaque maxime beatae
          laboriosam iure officiis, nihil voluptate quae hic molestiae nobis
          dolore nemo error numquam? Itaque doloribus aliquam ab quam voluptates
          earum, quidem beatae quia provident dolorem!
        </p>
        <button className="btn-global">Click To Learn More</button>
      </div>
    </div>
  );
};

export default About;
