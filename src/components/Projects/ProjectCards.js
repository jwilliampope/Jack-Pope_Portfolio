import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { CgWebsite } from "react-icons/cg"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{props.description}</Card.Text>

        {"\n"}
        {"\n"}

        {/* *** NOTE: Blog section has since been removed JP 6/8/23 THURS 2:46pm *** 
        
        If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"Visit Site"}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
