import React from "react"
import Card from "react-bootstrap/Card"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }}>
          <span className="purple">Jack Pope </span>
          from <span className="purple"> Byram, NJ.</span>
          <br /> <br />
          My first actual solicited project was, naturally enough, for family. The Irish side of the family tree had a stack of family history items scattered about, and much of it kept getting lost and then reappearing. I was asked to compile and preserve this material, and a website seemed to be the perfect vehicle for this request.
          <br />
          <br />
          My next experience with web design and development came via a request from a friend to help him with a book project. He has since built his own site with Wix, but the experience for me was invaluable. We shared ideas, and I built a prototype site for him. I have kept this site as part of my portfolio and update it regularly with new ideas and layouts.
        </p>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
