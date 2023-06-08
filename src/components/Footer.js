import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaFacebook } from "react-icons/fa"

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Jack Pope</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/jack-pope-3267a2203/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://github.com/jwilliampope?tab=repositories/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100079444227299" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
