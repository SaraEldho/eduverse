import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      {" "}
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted w-100%"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div className="me-5 p-3 d-none d-lg-block">
            <h5  style={{
                  color: "#365949",
                }}>Get connected with us on social networks:</h5>
          </div>

          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="me-4 text-reset  fs-3"
            >
              <FaFacebook
                style={{
                  color: "#365949",
                }}
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="me-4 text-reset fs-3"
            >
              <FaInstagram
               style={{
                  color: "#365949",
                }} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="me-4 text-reset  fs-3"
            >
              <FaLinkedin 
                 style={{
                  color: "#365949",
                }}
              />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="me-4 text-reset  fs-3"
            >
              <FaGithub 
                 style={{
                  color: "#365949",
                }}
              />
            </a>
          </div>
        </section>

        <section className="nav" >
          <MDBContainer className="see text-center text-md-start mt-5">
            <MDBRow className="mt-3 w-100" >
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"  style={{
                  color: "#365949",
                }}>
                  <MDBIcon icon="gem" className="me-3" />
                  EduVerse
                </h6>
                <p>
                  EduVerse is an innovative online learning platform dedicated
                  to providing high-quality courses taught by industry experts.
                  With a diverse selection of subjects EduVerse empowers
                  learners to pursue their passions.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 "  style={{
                  color: "#365949",
                }}>
                <h6 className="text-uppercase fw-bold mb-4">EXPLORE</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Courses
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Team
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 "  style={{
                  color: "#365949",
                }}>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-2" />
                  eduverse@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-2" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-2" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor:"#9ac0ae",color:"#3e6553"
                 }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            EduVerse.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
