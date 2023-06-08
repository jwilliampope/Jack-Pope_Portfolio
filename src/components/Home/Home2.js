import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myImg from "../../Assets/jack.jpg"
import Tilt from "react-parallax-tilt"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaFacebook } from "react-icons/fa"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Welcome</h1>
            <p className="home-about-body">
              <br />
              <br /> Thanks for visiting! I have been studying web development since July of 2018. During this time I have gained solid intermediate skills in HTML, CSS, and JS, and earned the Web Development Certificate from County College of Morris in Randolph, NJ, in 2022. This program has also provided me experience with WordPress, Dreamweaver, Photoshop, Java, and MySQL.
              <br /> <br /> Tools & Tech <br />
              <b className="purple"> HTML, CSS, Javascript, ReactJS</b>
              &nbsp;
              <br />
              <br />
              More <br /> <b className="purple">Dreamweaver, </b>
              <b className="purple">Photoshop, </b>
              <b className="purple">GitHub, </b>
              <b className="purple">Java, </b>
              <b className="purple">MySQL</b>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid profile-img" alt="Jack Pope, portrait" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIAL LINKS</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/jack-pope-3267a2203/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://github.com/jwilliampope?tab=repositories/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100079444227299" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
