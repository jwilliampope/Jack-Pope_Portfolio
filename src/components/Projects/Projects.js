import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"

import trueJourney from "../../Assets/Projects/tj.jpg"
import bonner from "../../Assets/Projects/bonner.jpg"
import bdm from "../../Assets/Projects/bdm.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">PROJECTS </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={trueJourney} isBlog={false} title="True Journey LLC" description="Inspiring Imagination" demoLink="https://jwilliampope.github.io/true-journey/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={bonner} isBlog={false} title="Bonner Family Archive" description="Saol Fada!" demoLink="https://jwilliampope.github.io/BonnerFamilyArchive/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={bdm} isBlog={false} title="Byram Digital Media" description="We Are Creators" demoLink="https://byramdigitalmedia.com/" />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
