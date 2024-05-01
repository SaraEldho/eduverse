import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";

function AboutCard() {
  return (
    <div>
      <section className="aboutHome" style={{ backgroundColor: "white" }}>
        <div className="container flexSB">
          <div className="left row m-5">
            <img src="https://i.postimg.cc/tJw0LCbt/freestock-45736213.jpg" />
          </div>
          <div className="right row p-5 ">
            <h5
              className="p-2"
              style={{ color: " #3e6553", fontWeight: "600" }}
            >
              LEARN ANYTHING
            </h5>
            <h3 style={{ color: " #3e6553" }}>
              Personalized Learning Experience: Tailor your learning journey to
              suit your individual preferences, interests, and goals.
            </h3>
            <div className="r1 mt-2 p-3">
              <div className="col-2">
                <IoBookOutline />
              </div>
              <div className="col-4">
                <h6>
                  <b>ONLINE COURSES</b>
                </h6>
                <p>
                  Discover a myriad of online courses tailored to your
                  interests, offering convenience and flexibility for your
                  learning journey.
                </p>
              </div>
            </div>

            <div className="r1 mt-2 p-3">
              <div className="col-2 ">
                <GrUserExpert />
              </div>
              <div className="col-4 ">
                <h6>
                  <b>LEARN WITH EXPERT</b>
                </h6>
                <p>
                  Experience transformative learning guided by experts in their
                  field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutCard;
