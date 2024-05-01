import React from "react";
import Back from "../../Components/Back";
import AboutCard from "../../Components/AboutCard";

function About() {
  return (
    <div>
      <Back className="m-5 p-5" title="About Us" />
      
      <section className="abb  ">
        {" "}
        <AboutCard />
      </section>
    </div>
  );
}

export default About;
