import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { Link } from 'react-scroll'

function Home() {
  return (


 
    <Row>
      <Col>
      <img src="https://img.freepik.com/premium-vector/simple-cat-coding-laptop-tech-software-engineer-design-vector-illustration_773815-96.jpg?w=2000" alt="Cat" width={200}/>
      </Col>
      <Col>
      <div>
        <div className="text-center mb-3">
        <h2>Hi! I'm Sarah Dean</h2>
        <h3>I'm a Software Engineer and I love to build amazing apps</h3>
        </div>

        <div>
          <Link to="about">
            <button>Learn More About Me</button>
          </Link>
          <Link to="projects">
            <button>See My Projects</button>
          </Link>
          <Link to="contact">
          <button>Contact Me</button>
          </Link>
        </div>

      </div>
      </Col>
      <Col>
      <div>
      <a href="#contact">
              Contact Me
            </a>
      </div>
      </Col>
      <Col>
      <a href="#projects">
      See My Past Work
    </a>
      </Col>
    </Row>
  )
}

export default Home