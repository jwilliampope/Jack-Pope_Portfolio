import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Front-End Web Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  )
}

export default Type
