import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import homeLogo from "../../Assets/lightning.png"
import Particle from "../Particle"
import Home2 from "./Home2"
import Type from "./Type"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name"> Jack Pope</strong>
              </h1>

              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
              <p className="heading-info" style={{ paddingLeft: 45, paddingTop: 45 }}>
                (973) 349-6522
              </p>
              <p className="heading-info" style={{ paddingLeft: 45 }}>
                jack@ByramDigitalMedia.com
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default Home
