import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
function Banner() {
  return (
    <div>
      <section className="banner p-5 d-flex justify-content">
        <div className="b1 ms-5 ps-5">
          <FaUserGraduate className="m-4" />
        </div>
        <div className="t1 mt-4 ">
          <h1>2000</h1>
          <h3>SUCCESS STORIES</h3>
        </div>

        <div className="b1 ms-5 ps-5">
          <FaChalkboardTeacher className="m-4" />
        </div>

        <div className="t1 mt-4">
         
          <h1>120</h1>
          <h3>TRUSTED TUTORS</h3>
        </div>

        <div className="b1 ms-5 ps-5">
          <SiGoogleclassroom  className="m-4"/>
        </div>
        <div className="t1 mt-4">
          <h1>320</h1>
          <h3>COURSES</h3>
        </div>
      </section>
    </div>
  );
}

export default Banner;
