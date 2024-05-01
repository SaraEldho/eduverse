import React from "react";
import "./Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import AboutCard from "../../Components/AboutCard";
import Banner from "../../Components/Banner";
import Card from "react-bootstrap/Card";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="main">
        <div className="container">
          <div className="row m-5 p-4">
            <div className="imm m-5 p-5">
              <h3>
                EduVerse: Where Learning Knows No Limits, Only Possibilities
              </h3>
              <h6>
                Come Learn with EduVerse and discover the endless possibilities
                of education.
              </h6>
              <div>
              <Link to={`register`}> 
                <button className="button1">
                  GET STARTED <FaLongArrowAltRight />
                </button></Link>
                <Link to={`courses`}> 
                <button className="button">
                  VIEW COURSES <FaLongArrowAltRight />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutCard />
      <Banner />
      <section
        className="testimonials p-5"
        style={{ backgroundColor: "white" }}
      >
        <h5
          className="p-3 text-center"
          style={{ color: " #3e6553", fontWeight: "600" }}
        >
          TESTIMONIAL
        </h5>
        <h3
          className="text-center"
          style={{ color: " #3e6553", fontWeight: "600" }}
        >
          Our Successful Students
        </h3>
        <div className="stories d-flex justify-content p-3">
          <Card className="card m-5" style={{ width: "22rem" }}>
            <Card.Body>
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/bJbHTShd/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.jpg"
                  width={90}
                  height={90}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <Card.Text>
                <FaQuoteLeft
                  style={{
                    position: "absolute",
                    top: "120px",
                    fontSize: "20px",
                  }}
                />
                <br></br>I was amazed by the depth of knowledge and expertise
                shared in the courses offered by EduHub. The instructors, who
                are seasoned professionals in their respective fields, are truly
                passionate about their subjects, and their guidance has helped
                me advance in my career.{" "}
                <h6 className="text-center pt-4">SARAH JOHN</h6>
                <div className="star " style={{ paddingLeft: "110px" }}>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5" style={{ width: "22rem" }}>
            <Card.Body>
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/C1R4X6pP/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg"
                  width={90}
                  height={90}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <Card.Text>
                <FaQuoteLeft
                  style={{
                    position: "absolute",
                    top: "120px",
                    fontSize: "20px",
                  }}
                />
                <br></br>EduHub has revolutionized my approach to learning. The
                convenience of online courses coupled with the expertise of the
                instructors has made my educational journey both enjoyable and
                rewarding. As a software engineer, I've found the technical
                courses particularly valuable.
                <h6 className="text-center pt-4">MATHEW D.</h6>
                <div className="star " style={{ paddingLeft: "110px" }}>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5" style={{ width: "22rem" }}>
            <Card.Body>
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/x8tTmgcQ/amy-hirschi-b3-AYk8-HKCl0-unsplash.jpg"
                  width={90}
                  height={90}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <Card.Text>
                <FaQuoteLeft
                  style={{
                    position: "absolute",
                    top: "120px",
                    fontSize: "20px",
                  }}
                />
                <br></br>EduHub has exceeded my expectations in every way. The
                platform is user-friendly, the courses are engaging, and the
                instructors are knowledgeable and supportive. I highly recommend
                it to anyone looking to further their education.
                <h6 className="text-center pt-4">EMILY S.</h6>
                <div className="star " style={{ paddingLeft: "110px" }}>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />

                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className="news">
        <div className="container flexSB">
          <div className="left row p-5 ">
            <h3>
              Stay Tuned for Exclusive Updates : Subscribe to Our Newsletter
              Today!
            </h3>
            <span className="pt-2">
              Stay informed and inspired with our blog's informative content.
            </span>
          </div>
          <div className="right1 d-flex p-5 ">
            <input 
            
            type="text" style={{marginTop:"30px"}}
             placeholder="Enter your email id" /> 
            <div style={{backgroundColor:"white",height:"40px",padding:"10px",marginTop:"30px"}}><BsFillSendFill /></div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
